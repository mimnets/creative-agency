import * as firebase from "firebase/app";
import firebaseConfig from'./firebase.config'
import "firebase/auth";

export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res =>{
        const {displayName, email, photoURL} = res.user;
        const signedInUser = {
            isSignedIn : true,
            name : displayName,
            email: email,
            img: photoURL
        }
        return signedInUser;
    })
    .catch( err =>{
        console.log(err);
        console.log(err.message)
    })
}