import { type FirebaseApp, initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { FirebaseAuthService } from './FirebaseAuthService';
// import { connectAuthEmulator, getAuth } from "firebase/auth";

/***
 * Get env vars
 */
const env = import.meta.env;

/***
 * Create the base Firebase instance
 */
class FirebaseService{
    private firebase: FirebaseApp;
    //  web app's Firebase configuration
    private firebaseConfig = {
        apiKey: env.VITE_FIREBASE_API_KEY,
        authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: env.VITE_FIREBASE_APP_ID,
    };
    public analytics;
    public auth;

    constructor(){
        this.firebase = initializeApp(this.firebaseConfig);
        this. analytics = getAnalytics(this.firebase);
        this.auth = new FirebaseAuthService();
        // Connect to emulators
        // connectAuthEmulator(getAuth(), "http://localhost:9099");
    }
}
export default FirebaseService;

const FirebaseServiceKey = new FirebaseService();
export const useAuth: () => FirebaseAuthService  = ()=> FirebaseServiceKey.auth