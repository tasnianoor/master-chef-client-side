// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZNWXzgCScK3O0EL9tbx8w69UhqswkFkE",
//   authDomain: "master-chef-client-side.firebaseapp.com",
//   projectId: "master-chef-client-side",
//   storageBucket: "master-chef-client-side.appspot.com",
//   messagingSenderId: "197363175784",
//   appId: "1:197363175784:web:6fd7a4711b4e4f6b7106dd"
// };


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;