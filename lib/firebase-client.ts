// lib/firebase-client.ts
// Client-side Firebase initialization for analytics and monitoring
// This file should only be imported in client components

"use client";

import { firebaseConfig } from "./firebase";

/**
 * Initialize Firebase client-side
 * This is optional but recommended for analytics and error tracking
 *
 * Usage in your components:
 * import { initializeFirebaseClient } from '@/lib/firebase-client';
 *
 * useEffect(() => {
 *   initializeFirebaseClient();
 * }, []);
 */
export function initializeFirebaseClient() {
  // Check if all required environment variables are set
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.warn("Firebase configuration is not complete. Analytics disabled.");
    return null;
  }

  try {
    // Dynamic import to avoid loading Firebase unless needed
    const firebasePromise = import("firebase/app").then(async (firebase) => {
      // Initialize Firebase app
      const app = firebase.initializeApp(firebaseConfig);

      // Initialize Analytics (optional)
      try {
        await import("firebase/analytics").then(({ getAnalytics }) => {
          getAnalytics(app);
        });
      } catch (error) {
        console.debug("Firebase Analytics not available");
      }

      return app;
    });

    return firebasePromise;
  } catch (error) {
    console.error("Failed to initialize Firebase:", error);
    return null;
  }
}
