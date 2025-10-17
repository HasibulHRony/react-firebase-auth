import React, { use } from 'react'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { Navigate, useLocation } from 'react-router'

export default function PrivetRoutes({ children }) {
    const { user, loading } = use(AuthContext)

    const location = useLocation()
    console.log(location)

    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }

    if (user) {
        return children
    }
    else {
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>
    }
}
