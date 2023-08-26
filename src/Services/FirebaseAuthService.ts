import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword  } from "firebase/auth";
import { app } from "./FirebaseService";

export class FirebaseAuthService{
    public auth;
    
    constructor(){
     // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app)
    }

    public  createNewUserWithEmail(email:string, password:string){
        createUserWithEmailAndPassword(this.auth, email, password )
        .then((userCredential) => {
            // Signed in user
            const user = userCredential.user;
            // ...
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(`Authentication Error: ${errorCode} - ${errorMessage}`)
        });
    }
    public  signInWithEmail(email:string, password:string){
        signInWithEmailAndPassword(this.auth, email, password )
        .then((userCredential) => {
            // Signed in user
            const user = userCredential.user;
            // ...
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(`Authentication Error: ${errorCode} - ${errorMessage}`)
        });
    }

}