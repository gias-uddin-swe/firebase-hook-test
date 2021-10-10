import initializeFirebaseApp from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

initializeFirebaseApp();
const provider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  let history = useHistory();

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        redirect();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const redirect = () => {
    history.push("/home");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setError("invalid state change");
      }
    });
  }, []);

  const handleRegistration = (email, password) => {
    // createUserWithEmailAndPassword(auth, email, password).then((result) => {
    //   console.log(result.user).catch((error) => {
    //     console.log(error.message);
    //   });
    // });
    console.log(email, password);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    googleLogin,
    user,
    error,
    logOut,
    handleRegistration,
  };
};
export default useFirebase;
