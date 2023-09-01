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

    public async createNewUserWithEmail(email:string, password:string): Promise<UserData> {
        try{
        const userCredential: UserCredential = await  createUserWithEmailAndPassword(this.auth, email, password )
            // Signed in user
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
        }catch(error:any) {
            throw new Error(error)
        };
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
            throw new Error(error)
        }
    }
    public async signInwithGoogle(): Promise<UserData>{
        try {
            const result = await signInWithPopup(this.auth, this.provider);        
            const user = result.user;
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
            throw new Error(error);
        }
    }
    public async signOutUser():Promise<boolean>{
      const isSignedOut = await signOut(this.auth)
        .then(()=>{
            // send app notification of successful logout
            console.log("📘 %cUser signed out.",
            "color:dodgerblue");
            return true
        })
        .catch((error)=>{
            throw new Error(error)
        })
        return isSignedOut;
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