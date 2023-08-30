import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut, 
    UserCredential,
    onAuthStateChanged,
    type Unsubscribe,
    sendPasswordResetEmail,
    } from "firebase/auth";
import { UserData } from "../Reducers/UserSlice";

export class FirebaseAuthService{
    private auth;
    private provider;
    
    constructor(){
     // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth()
    this.provider = new GoogleAuthProvider()
    }

    public createNewUserWithEmail(email:string, password:string) {
        createUserWithEmailAndPassword(this.auth, email, password )
        .then((userCredential) => {
            // Signed in user
            const user = userCredential.user;
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(`Authentication Error: ${errorCode} - ${errorMessage}`)
        });
        return null;
    }
    public async signInWithEmail(email: string, password: string): Promise<UserData> {
        try {
            const userCredential: UserCredential = await signInWithEmailAndPassword(this.auth, email, password);
            const user = userCredential.user;
            // console.log("📘 %cUser signed in with email and pass:", "color:dodgerblue", userCredential);
            const relevantUserData = {
                uid: user.uid,
                email: user.email,
                emailVerified: user.emailVerified,
                phone: user.phoneNumber,
                photoUrl: user.photoURL,
                name: user.displayName,
                provider: user.providerId
            }
            return relevantUserData;
        } catch (error:any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(`Authentication Error: ${errorCode} - ${errorMessage}`);
        }
    }
    public async signInwithGoogle(): Promise<UserCredential>{
        try {
            const result = await signInWithPopup(this.auth, this.provider);        
            const credential = GoogleAuthProvider.credentialFromResult(result);    
            console.log("📘 %cUser signed in with google:", "color:dodgerblue", credential);
    
            return result 
        } catch (error:any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData?.email;
    
            throw new Error(`Google Login Error for ${email}: ${errorCode} - ${errorMessage}`);
        }
    }
    public signOutUser(){
        signOut(this.auth)
        .then(()=>{
            // send app notification of successful logout
            console.log("📘 %cUser signed out.",
            "color:dodgerblue");
        })
        .catch((error)=>{
            throw new Error(`⚠️ Google Login Error: ${error.code} - ${error.message}`)
        })
    }
    
    public onAuthStateChange(callback: any): Unsubscribe{
      return  onAuthStateChanged(this.auth, callback)
    }
    public sendPasswordReset(email: string): Promise<void>{
      return  sendPasswordResetEmail(this.auth, email)
    }
    public getCurrentUser(){
        return this.auth.currentUser;
    }
}