import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDqHjm2pLm_zocmmcx0HWpQFRBK0JMdx4w",
  authDomain: "otp-mobile-29710.firebaseapp.com",
  projectId: "otp-mobile-29710",
  storageBucket: "otp-mobile-29710.firebasestorage.app",
  messagingSenderId: "1012255283952",
  appId: "1:1012255283952:web:3bcd400b8ad24f0fdc0035",
  measurementId: "G-CEHYETQTVJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
