# Car-Parking
# Digital Car Parking System (Web-Based)

This is a **frontend web application** for a **Digital Car Parking System** that allows users to sign up, log in, and view parking slot availability using a clean dashboard interface.

## 🔧 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Firebase** – For authentication and real-time database
- **Responsive Design** – Works across devices

## 📁 Project Structure
├── index.html # Login page
├── signup.html # Registration page
├── dashboard.html # Dashboard showing parking slots/status
├── style.css # Main stylesheet
├── css.txt # Additional or alternate CSS
├── firebase-config.js # Firebase configuration file
└── images/
└── image.jpg # UI image asset


## 🚀 Features

- 🔐 **User Authentication** (Firebase-based)
- 🧾 **Sign Up/Login Pages**
- 📊 **Dashboard UI** for viewing parking information
- 🌐 **Responsive Design**
- 🔥 **Firebase Integration** for backend services (authentication & database)

## 🛠️ Getting Started

1. Clone or extract the repository.
2. Open `index.html` in a browser to start the app.
3. Configure your Firebase project and update `firebase-config.js` with your credentials.
. ```js
// firebase-config.js (example structure)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};


5. Ensure Firebase services are properly connected for authentication and real-time updates.
📌 To Do / Future Enhancements
 Add real-time parking slot updates

 Integrate Razorpay for online payment
