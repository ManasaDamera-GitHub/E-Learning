// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "fhttps://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe-jddPPJtjpbBIbh54QZX1MtFCTZLCNk",
    authDomain: "e-learning-40bef.firebaseapp.com",
    projectId: "e-learning-40bef",
    storageBucket: "e-learning-40bef.firebasestorage.app",
    messagingSenderId: "528648423814",
    appId: "1:528648423814:web:e200eeb3ca828e69190407"
};

document.getElementById("signup").addEventListener("submit", (event) => {
    event.preventDefault();

    let emial = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(email, password)
            // alert("Login successfully")
            showToast('success', 'Login successful!'); // Success toast
            window.location.href = "index.html"

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.error("user did not found")
            // alert("user already exist")
            // ..
            showToast('failure', 'Login failed! Please check your credentials.'); // Failure toast
        });


});

function showToast(type, message) {
    // Create a new toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    // window.location.href = "user.html"
    // Add the toast to the container
    const container = document.getElementById('toast-container');
    container.appendChild(toast);

    // Remove the toast after the animation ends
    setTimeout(() => {
        toast.remove();
    }, 3000); // Matches the duration of the animation

}