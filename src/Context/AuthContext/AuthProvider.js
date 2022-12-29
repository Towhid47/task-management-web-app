import React, { createContext, useState } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../Firebase/Firebase.init.js';

const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    const [loader, setLoader] = useState(true);

    const authData = {
         user,
         loader
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;