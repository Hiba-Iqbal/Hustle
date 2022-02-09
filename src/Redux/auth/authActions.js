import {
  auth,
  firestore,
  googleAuthProvider,
  serverTimeStamp,
} from "../../Firebase/firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";
import firebase from "../../Firebase/firebase";
import history from "../../history/history";
import { useCookies, setCookie } from "react-cookie";

export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export var removeUser = () => ({
  type: REMOVE_USER,
});

export var signup =
  ({ email, password, fullName }) =>
  async (dispatch) => {
    try {
      //create user on firebase auth
      var {
        user: { uid },
      } = await auth.createUserWithEmailAndPassword(email, password);
      //save user data to firestore
      var userInfo = {
        fullName,
        email,
        createdAt: serverTimeStamp(),
      };
      history.push("/");
      window.location.reload(false);
      await firestore.collection("users").doc(uid).set(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

export var signin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      //signIn user with auth
      await auth.signInWithEmailAndPassword(email, password);

      //      navigate to home page
      history.push("/");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

export var signout = () => async (dispatch) => {
  try {
    //signOut user from firebase auth (backend)

    await auth.signOut();
    history.push("/landing");
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};

export var googleSignin = () => async (dispatch) => {
  try {
    //signin user in firebase auth (google)
    var {
      user: { displayName, email, uid },
      additionalUserInfo: { isNewUser },
    } = await auth.signInWithPopup(googleAuthProvider);
    history.push("/");
    window.location.reload(false);
    //save user data to firestore
    if (isNewUser) {
      //if new user then add info to firesore
      var userInfo = {
        fullName: displayName,
        email,
        createdAt: serverTimeStamp(),
      };
      await firestore.collection("users").doc(uid).set(userInfo);
    }
  } catch (error) {
    console.log(error);
  }
};
export var firebaseAuthListener = () => async (dispatch) => {
  try {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        var { uid } = user;
        //fetch data from firestore
        var query = await firestore.collection("users").doc(uid).get();
        var { fullName, email } = query.data();
        var userDataForState = {
          fullName,
          email,
          uid,
        };
        //action call
        dispatch(setUser(userDataForState));
        history.push("/");
        window.location.reload(false);
        // User is signed in.
      } else {
        // No user is signed in.
        console.log("history", history);

        //check if user is on landing page
        history.push("/landing");
        dispatch(removeUser());
        // if (history.location.pathname === "/landing") {
        //   return;
        // } else {
        //   console.log("ELSE");
        //   window.location.reload(false);
        // }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
