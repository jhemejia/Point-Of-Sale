import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut } from "firebase/auth";

export class FirebaseAuthService{
    private auth;
    private provider;
    
    constructor(){
     // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth()
    this.provider = new GoogleAuthProvider()
    }

    public createNewUserWithEmail(email:string, password:string){
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
           console.log("📘 %cUser signed in with email and pass: ",
           "color:dodgerblue",user)
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(`Authentication Error: ${errorCode} - ${errorMessage}`)
        });
    }
    public signInwithGoogle(){
        signInWithPopup(this.auth, this.provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            console.log("📘 %cUser signed in with google: ",
            "color:dodgerblue",user);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            
            throw new Error(`Google Login Error for ${email}: ${errorCode} - ${errorMessage}`)
        });
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
}