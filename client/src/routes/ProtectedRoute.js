import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userConrext'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const context = useContext(userContext)
    const { isAuthenticated } = context
    if (!isAuthenticated) {
        return <Navigate to="/" />
    }
    return (
        children
    )
}

export default ProtectedRoute;