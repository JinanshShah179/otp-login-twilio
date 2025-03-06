# OTP Login Application

This is a full-stack OTP-based login application built using React for the frontend and Node.js with Express for the backend. It uses Twilio's SMS API to send and verify OTPs for user authentication.

---

## Features
- Phone number verification using OTP (One-Time Password).
- Integration with Twilio for sending SMS.
- React-based user interface with clean component-based structure.
- Loading spinners and toasts for improved user experience.
- Full validation and error handling.

---

## Tech Stack
### Frontend
- **React**: Functional components and hooks.
- **CSS**: Custom styling for a clean UI.
- **React Icons**: For icons like spinner and shield.
- **React Hot Toast**: For toast notifications.
- **React Phone Input 2**: For phone number input with country selection.

### Backend
- **Node.js**: Backend runtime.
- **Express.js**: For building REST APIs.
- **MongoDB**: For storing user data and OTPs.
- **Twilio**: For sending and verifying OTPs.

---

## Installation and Setup

### Prerequisites
1. Node.js installed on your machine.
2. MongoDB running locally or a cloud instance.
3. Twilio account with an active phone number.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Backend Setup**:
   - Navigate to the backend folder:
     ```bash
     cd Backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `Backend` directory and add the following:
     ```env
     TWILIO_ACCOUNT_SID=your_account_sid
     TWILIO_AUTH_TOKEN=your_auth_token
     TWILIO_PHONE_NUMBER=your_twilio_phone_number
     PORT=3000
     ```
   - Start the server:
     ```bash
     node server.js
     ```

3. **Frontend Setup**:
   - Navigate to the frontend folder:
     ```bash
     cd Frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

4. **Access the App**:
   - Open your browser and navigate to:
     ```
     http://localhost:3000
     ```

---

## File Structure
```
|-- Backend
|   |-- models
|   |   |-- User.js         # User schema
|   |-- routes
|   |   |-- auth.js         # OTP routes
|   |-- utils
|   |   |-- otp.js          # Twilio integration
|   |-- server.js           # Backend entry point
|
|-- Frontend
|   |-- src
|   |   |-- components
|   |   |   |-- PhoneVerification.jsx   # Phone input & OTP handling
|   |   |   |-- OTPVerification.jsx     # OTP input & verification
|   |   |   |-- SuccessMessage.jsx      # Succes message 
|   |   |-- App.jsx          # Main component
|   |   |-- index.css        # Styling
|   |   |-- index.js         # Frontend entry point
```

---

## Usage
- Enter your phone number in the input field and click "Send code via SMS."
- Enter the OTP received on your phone and click "Verify OTP."
- On successful verification, you will see a success message.

---

## Environment Variables
The following environment variables are required:
- **TWILIO_ACCOUNT_SID**: Your Twilio account SID.
- **TWILIO_AUTH_TOKEN**: Your Twilio authentication token.
- **TWILIO_PHONE_NUMBER**: Your Twilio phone number.
- **PORT**: The port on which the backend server will run.

---

## Future Enhancements
- Add support for email-based OTPs.
- Implement user registration and profile management.
- Deploy the application on cloud platforms (e.g., AWS, Heroku).
- Add more robust error handling and logging.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributors
- [Your Name](https://github.com/<your-username>)

Feel free to fork this repository and submit pull requests for any improvements!

