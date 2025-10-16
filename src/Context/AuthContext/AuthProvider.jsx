import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase.init'

export default function AuthProvider({ children }) {

    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser,
    }

    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    )
}
