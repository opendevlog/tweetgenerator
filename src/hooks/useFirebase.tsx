import { useEffect, useState } from 'react';
import { FirebaseApp } from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const useFirebase = () => {
  const [app, setApp] = useState<FirebaseApp>();

  useEffect(() => {
    if (!app) {
      const firebaseApp = initializeApp(firebaseConfig);
      setApp(firebaseApp);
    }
  }, [app]);

  return app;
};

export default useFirebase;
