import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

import "../../firebase";
import { AuthContext } from "./MyContexts";

import Loading from "../Pages/Loading.jsx";

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserNameError, setIsUserNameError] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(() => ({
        ...user,
      }));
    });

    return unsubscribe;
  }, []);

  const signup = async function (username, email, password) {
    const auth = getAuth();

    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(createUser.user, {
        displayName: username,
      });

      setCurrentUser(() => ({
        ...createUser.user,
      }));
    } catch (error) {
      // console.log("Sign Up Error", error.code);
      // console.log("Sign Up Error", error.message);
      return error;
    }
  };

  const login = async function (email, password) {
    const auth = getAuth();

    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async function () {
    const auth = getAuth();
    try {
      await signOut(auth);
      setIsUserNameError(() => false);
      return;
    } catch (error) {
      console.log("Log Out Error", error.code);
      console.log("Log Out Error", error.message);

      return error;
    }
  };

  const value = {
    signup,
    login,
    logOut,
    currentUser,
    isUserNameError,
    setIsUserNameError,
  };

  // return <AuthContext value={value}>{children}</AuthContext>;
  return (
    <AuthContext value={value}>
      {currentUser ? children : <Loading />}
    </AuthContext>
  );
}
