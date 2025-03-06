import React from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import "../App.css";

const OTPVerification = ({ otp, setOtp, loading, onVerifyOTP }) => {
  return (
    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
      <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
        <BsFillShieldLockFill size={30} />
      </div>
      <label
        htmlFor="otp"
        className="font-semibold text-xl text-white text-center"
      >
        Enter your OTP
      </label>
      <OtpInput
        value={otp}
        onChange={setOtp}
        OTPLength={6}
        otpType="number"
        disabled={false}
        autoFocus
        className="opt-container"
      />
      <button
        onClick={onVerifyOTP}
        className="bg-emerald-600 w-full flex gap-1 justify-center items-center py-2.5 text-white rounded-lg"
        disabled={loading}
      >
        {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
        <span>Verify OTP</span>
      </button>
    </div>
  );
};

export default OTPVerification;
