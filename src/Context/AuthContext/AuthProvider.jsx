import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase.init'
import { onAuthStateChanged } from 'firebase/auth';

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        return ()=> unsubscribe();
    })
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        user,
        setUser
    }

    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    )
}
