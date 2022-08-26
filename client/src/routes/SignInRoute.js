import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userConrext'
import { Navigate, } from 'react-router-dom'

const SignInRoute = ({ children }) => {
    const context = useContext(userContext)

    const { isAuthenticated } = context
    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        children
    )
}

export default SignInRoute;