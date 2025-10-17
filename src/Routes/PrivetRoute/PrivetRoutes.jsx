import React, { use } from 'react'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { Navigate } from 'react-router'

export default function PrivetRoutes({ children }) {
    const {user} = use(AuthContext)

    if(user){
        return children
    }
    else{
        return <Navigate to={'/login'}></Navigate>
    }
}
