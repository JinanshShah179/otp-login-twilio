import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import PhoneInputForm from "./components/PhoneInputForm";
import OTPVerification from "./components/OTPVerification";
import SuccessMessage from "./components/SuccessMessage";
import "./App.css";

function App() {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  const handleSendOTP = async () => {
    console.log("Sending OTP...");
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/auth/sendotp", {
        phone: ph,
      });
      setLoading(false);
      if (response.data.success) {
        toast.success(response.data.message);
        setShowOTP(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Failed to send OTP. Please try again.");
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowOTP(true);
    }, 1000);
  };

  const handleVerifyOTP = async () => {
    console.log("Verifying OTP...");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/auth/verifyotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: ph, otp }),
      });

      const data = await response.json();

      if (data.success) {
        setUser(true); // Successfully verified
        toast.success("OTP Verified Successfully!");
      } else {
        toast.error(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Failed to verify OTP. Please try again later.");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <>
      <section className="bg-emerald-500 flex items-center justify-center h-screen">
        <div>
          <Toaster toastOptions={{ duration: 4000 }} />
          {!user ? (
            showOTP ? (
              <OTPVerification
                otp={otp}
                setOtp={setOtp}
                loading={loading}
                onVerifyOTP={handleVerifyOTP}
              />
            ) : (
              <PhoneInputForm
                ph={ph}
                setPh={setPh}
                loading={loading}
                onSendOTP={handleSendOTP}
              />
            )
          ) : (
            <SuccessMessage />
          )}
        </div>
      </section>
    </>
  );
}

export default App;
