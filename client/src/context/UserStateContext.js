import React, { useState } from 'react'
import userContext from "./userConrext";


const UserStateContext = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    const handleAuthentication = (value) => {
        setIsAuthenticated(value)
    }

    const handleUserChange = (user) => {
        setUser(user)
    }


    return (
        <userContext.Provider value={{ isAuthenticated, setIsAuthenticated, handleAuthentication, handleUserChange, user }}>{children}</userContext.Provider>
    )
}

export default UserStateContext;