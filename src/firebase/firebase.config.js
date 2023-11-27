import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}

export const app = initializeApp(firebaseConfig)



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCPRyPpSh7h_U67uh_NSkID_dlDw7P_ZMA",
//   authDomain: "building-management-b3fe8.firebaseapp.com",
//   projectId: "building-management-b3fe8",
//   storageBucket: "building-management-b3fe8.appspot.com",
//   messagingSenderId: "232274255658",
//   appId: "1:232274255658:web:affaa9057e25a578ac4853"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy
