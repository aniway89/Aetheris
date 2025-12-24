// lib/firebase.client.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { 
  getAuth, 
  Auth, 
  browserLocalPersistence, 
  setPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  applyActionCode,
  checkActionCode
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

class FirebaseClient {
  private static instance: FirebaseClient;
  public app: FirebaseApp;
  public auth: Auth;
  public googleProvider: GoogleAuthProvider;

  private constructor() {
    const existingApps = getApps();
    if (existingApps.length > 0) {
      this.app = existingApps[0];
    } else {
      this.app = initializeApp(firebaseConfig);
    }
    
    this.auth = getAuth(this.app);
    
    // Configure persistence
    this.initAuth();
    
    this.googleProvider = new GoogleAuthProvider();
    this.configureGoogleProvider();
  }

  private async initAuth() {
    try {
      await setPersistence(this.auth, browserLocalPersistence);
    } catch (error) {
      console.error('Error setting auth persistence:', error);
    }
  }

  private configureGoogleProvider() {
    this.googleProvider.addScope('profile');
    this.googleProvider.addScope('email');
    this.googleProvider.setCustomParameters({
      prompt: 'select_account'
    });
  }

  public static getInstance(): FirebaseClient {
    if (!FirebaseClient.instance) {
      FirebaseClient.instance = new FirebaseClient();
    }
    return FirebaseClient.instance;
  }

  // Google Sign-in with Popup
  public async signInWithGoogle(): Promise<any> {
    try {
      const result = await signInWithPopup(this.auth, this.googleProvider);
      return result;
    } catch (error) {
      console.error('Google sign-in popup error:', error);
      throw error;
    }
  }

  // Email verification
  public async sendEmailVerificationToUser(): Promise<void> {
    if (!this.auth.currentUser) {
      throw new Error("No user is currently signed in");
    }
    
    try {
      await sendEmailVerification(this.auth.currentUser, {
        url: `${typeof window !== 'undefined' ? window.location.origin : ''}/verify-email-callback`,
        handleCodeInApp: true,
      });
    } catch (error) {
      console.error("Error sending email verification:", error);
      throw error;
    }
  }

  // Verify email with code
  public async verifyEmailWithCode(oobCode: string): Promise<void> {
    try {
      await applyActionCode(this.auth, oobCode);
    } catch (error) {
      console.error("Error verifying email:", error);
      throw error;
    }
  }

  // Check if action code is valid
  public async checkActionCodeValidity(oobCode: string): Promise<any> {
    try {
      const info = await checkActionCode(this.auth, oobCode);
      return info;
    } catch (error) {
      console.error("Error checking action code:", error);
      throw error;
    }
  }

  // Subscribe to auth state changes
  public subscribe(callback: (user: any) => void) {
    return onAuthStateChanged(this.auth, callback);
  }

  // Sign out
  public async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  }

  public getCurrentUser() {
    return this.auth.currentUser;
  }

  public isAuthenticated(): boolean {
    return !!this.auth.currentUser;
  }
}

// Export singleton instance
export const firebaseClient = FirebaseClient.getInstance();

// Export auth for direct use
export const auth = firebaseClient.auth;

// Re-export Firebase functions
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged
};

export type { User } from "firebase/auth";

export default firebaseClient;