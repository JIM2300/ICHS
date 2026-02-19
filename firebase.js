// ============================================================
// FIREBASE CONFIGURATION
// ============================================================
// This file connects your election app to your Firebase project.
// You MUST replace the placeholder values below with your actual
// Firebase project credentials before the app will work.
//
// HOW TO GET THESE VALUES:
// 1. Go to https://console.firebase.google.com
// 2. Click on your project (or create one — see the Setup Guide)
// 3. Click the gear icon ⚙️ next to "Project Overview"
// 4. Select "Project settings"
// 5. Scroll down to "Your apps" section
// 6. If no app exists, click the web icon </> to add one
// 7. Copy the firebaseConfig object values shown there
// ============================================================

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PASTE_YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export it for use in the app
export const db = getDatabase(app);
