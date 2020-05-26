import firebase from "firebase";
import { AuthenticationContext } from "./context";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const initializeFirebase = () => {
  const hasNotInitialized = firebase.apps.length === 0;
  if (hasNotInitialized) {
    const firebaseConfig = {
      apiKey: "AIzaSyDuNOydKrqTXzF6T_thCiuAoat1vRGB0Ps",
      authDomain: "food-app-01.firebaseapp.com",
      databaseURL: "https://food-app-01.firebaseio.com",
      projectId: "food-app-01",
      storageBucket: "food-app-01.appspot.com",
      messagingSenderId: "414171254544",
      appId: "1:414171254544:web:f99f34c3911755e1499f95",
      measurementId: "G-HYPLTWM846"
    };

    firebase.initializeApp(firebaseConfig);
  }

  return firebase.auth();
};

export const AuthenticationContextProvider = ({ children }) => {
  const firebaseAuthApi = initializeFirebase();
  const history = useHistory();

  const [state, setState] = useState({
    authenticationToken: undefined,
    firebaseUser: undefined,
    hasFirebaseLoaded: false,
    isLoggedIn: false,
    userId: undefined
  });

  const onAuthStateChanged = async firebaseUser => {
    const authenticationToken = firebaseUser
      ? await firebaseUser.getIdToken()
      : undefined;

    setState(prevState => ({
      ...prevState,
      authenticationToken,
      firebaseUser,
      hasFirebaseLoaded: true,
      isLoggedIn: !!firebaseUser,
      userId: firebaseUser && firebaseUser.uid
    }));
  };

  useEffect(() => {
    firebaseAuthApi.onAuthStateChanged(onAuthStateChanged);
  }, []);

  const logIn = async (email, password, autoRedirectTo) => {
    const userCreds = await firebaseAuthApi.signInWithEmailAndPassword(
      email,
      password
    );
    const firebaseUser = userCreds.user;
    await onAuthStateChanged(firebaseUser);

    if (autoRedirectTo) {
      history.push(autoRedirectTo);
    }
  };

  if (!state.hasFirebaseLoaded) {
    return <div>Loading...</div>;
  }

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened.
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        ...state,
        logIn,
        signOut
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
