import { auth, firestore, googleAuthProvider, serverTimeStamp } from "../../Firebase/firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";
import firebase from "../../Firebase/firebase";
import history from "../../history/history";

export var setUser = (user) => ({
    type:SET_USER,
    payload:{
    user
    }  
})

export var removeUser = () => ({
    type:REMOVE_USER,
})

export var signup = ({email,password,fullName}) => async (dispatch) => {
    try {
         //create user on firebase auth
         var {user:{uid}} = await auth.createUserWithEmailAndPassword(email , password);
        //save user data to firestore 
        var userInfo ={
            fullName,
            email,
            createdAt: serverTimeStamp()
        }
        await firestore.collection("users").doc(uid).set(userInfo)
        history.push("/")
        window.location.reload(false);
    } 
    catch (error) {
        console.log(error)
    }
    
}

export var signin = ({email,password}) => async (dispatch) =>
{
    try {

        //signIn user with auth
    await auth.signInWithEmailAndPassword(email,password)

    //      navigate to home page
    history.push("/")
    window.location.reload(false);
}
catch (error) {
    console.log(error);
}
}

export var signout = () => async (dispatch) => {
    try {
        //signOut user from firebase auth (backend)
        await auth.signOut();
    } catch (error) {
        console.log(error)
    }
}


export var googleSignin = () => async(dispatch)=> {
    try {
     //signin user in firebase auth (google)
     var {user: {displayName,email,uid} ,additionalUserInfo:{isNewUser}} = await auth.signInWithPopup(googleAuthProvider);
     //save user data to firestore
         if(isNewUser){
             //if new user then add info to firesore
             var userInfo ={
               fullName:displayName,
               email,
               createdAt: serverTimeStamp()
           }
           await firestore.collection("users").doc(uid).set(userInfo);
           history.push("/")
           window.location.reload(false);
}
    } catch (error) {
        console.log(error)
    }
}
export var firebaseAuthListener = () => async (dispatch) => {
    try {
                firebase.auth().onAuthStateChanged(async function(user) {
                    if (user) {
                        var {uid} = user;                    
                        //fetch data from firestore
                        var query = await firestore.collection("users").doc(uid).get();
                        var {fullName,email} = query.data();
                        var userDataForState = {
                            fullName,
                            email,
                            uid
                        }
                        //action call
                        dispatch(setUser(userDataForState)); 
                        // User is signed in.
                    } else {
                        // No user is signed in.
                        
                     dispatch(removeUser());
                    }
                  });
            } catch (error) {
                console.log(error)
            }
}
