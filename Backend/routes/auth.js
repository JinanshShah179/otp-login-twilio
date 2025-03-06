const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { sendOTP } = require("../utils/otp");
const { randomInt } = require("crypto");

router.post("/sendotp", async (req, res) => {
  const { phone } = req.body;

  const otp = randomInt(100000, 999999);

  try {
    const user = await User.findOneAndUpdate(
      { phone },
      { otp, otpExpiration: Date.now() + 60000 },
      { upsert: true, new: true }
    );
    await sendOTP(phone, otp);
    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

router.post("/verifyotp", async (req, res) => {
  const { phone, otp } = req.body;

  try {
    const user = await User.findOne({ phone, otp });
    if (!user || user.otpExpiration < Date.now()) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    user.otp = undefined;
    user.otpExpiration = undefined;
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ success: false, message: "Failed to verify OTP" });
  }
});

module.exports = router;
