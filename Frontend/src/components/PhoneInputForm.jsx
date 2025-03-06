import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../App.css";

const PhoneInputForm = ({ ph, setPh, loading, onSendOTP }) => {
  return (
    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
      <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
        <BsFillTelephoneFill size={30} />
      </div>
      <label
        htmlFor="ph"
        className="font-semibold text-xl text-white text-center"
      >
        Verify your phone number
      </label>
      <PhoneInput
        country={"in"}
        placeholder="Enter phone number"
        value={ph}
        onChange={setPh}
        inputProps={{
          autoFocus: true,
        }}
      />
      <button
        onClick={onSendOTP}
        className="bg-emerald-600 w-full flex gap-1 justify-center items-center py-2.5 text-white rounded-lg"
        disabled={loading}
      >
        {loading && <span className="animate-spin">...</span>}
        <span>Send code via SMS</span>
      </button>
    </div>
  );
};

export default PhoneInputForm;
