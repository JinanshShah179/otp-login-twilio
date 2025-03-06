const twilio = require("twilio");
const dotenv = require("dotenv");

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendOTP(phone, otp) {
  try {
    const message = await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: "+14346942338",
      to: `+91${phone}`,
    });
    console.log(`OTP sent to ${phone}: ${message.sid}`);
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
}

module.exports = { sendOTP };
