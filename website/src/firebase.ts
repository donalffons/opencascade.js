import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

if (ExecutionEnvironment.canUseDOM && window.location.hostname !== "localhost") {
  const firebaseConfig = {
    apiKey: "AIzaSyARJVISiYhfj86d1n3wFYcXChqHML3iejQ",
    authDomain: "opencascade-js.firebaseapp.com",
    projectId: "opencascade-js",
    storageBucket: "opencascade-js.appspot.com",
    messagingSenderId: "192043386146",
    appId: "1:192043386146:web:67db78511b3e00d081917b",
    measurementId: "G-F2GYWNDL2E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}
