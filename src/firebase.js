// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTtxmDmrIbmS4BEcUUL7dvmi-_vqDTftY",
    authDomain: "whitedoorz.firebaseapp.com",
    projectId: "whitedoorz",
    storageBucket: "whitedoorz.appspot.com",
    messagingSenderId: "575970109482",
    appId: "1:575970109482:web:0f854cc2b1558ec203bb53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
