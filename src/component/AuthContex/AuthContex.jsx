import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../firebase.config';
export const authCntext = createContext(null);
const auth = getAuth(app);
const AuthContex = ({children}) => {
    const [user,setUser] = useState('')
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    };

const logOut = () => {
   return signOut(auth)
}

   useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth , carrentUser => {
    console.log('suth state change', carrentUser)
    setUser(carrentUser)
   })
   return () => {
    unsubscribe()
   }
   },[])
     
    const authInfo ={
      user,
      createUser,
      singInUser,
      logOut,
    }
    return (
        <authCntext.Provider value = {authInfo}>
            {children}
        </authCntext.Provider>
    );
};

export default AuthContex;