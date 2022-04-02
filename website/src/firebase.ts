import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const isProd = window.location.hostname !== "localhost";

if (ExecutionEnvironment.canUseDOM) {
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
  if (isProd) {
    getAnalytics(app); // reports start location automatically
  }
}

export const onRouteUpdate = ({ location }) => {
  if (!isProd) return;
  setTimeout(() => { // wait for document.title to update
    console.log("onRouteUpdate", location, document.title);
    logEvent(getAnalytics(getApp()), "page_view", {
      page_location: location.pathName,
      language: "en_us",
      page_encoding: "UTF-8",
      page_title: document.title,
      user_agent: window.navigator.userAgent,
    });
  }, 100);
}
