import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase/Firebase.init.js';

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    const [loader, setLoader] = useState(true);


    ///// Create User or Registration via Email & Password
    const  Registration = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    ///// Set or Update User Profile including Name & PhotoURL ....
    const userProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }


    ////// Sign in existing users
    const signIn = (email,password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    } 

    ///// Google Sign In
    const googleSignIn = (provider) =>{
        setLoader(true);
        return signInWithPopup(auth, provider)
    }


    //// Log Out /////
    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    }



    ///// OnAuthState() Changed method defines whether a user is currently Logged in or Not....
    useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser);
                setLoader(false);
          })
          return()=>{
              unSubscribe();
          }
    },[])

    const authData = {
         user,
         loader,
         Registration,
         userProfile,
         signIn,
         googleSignIn,
         logOut
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;