import React, { useContext, useEffect, useState } from 'react'
import userContext from '../context/userConrext'
import Alerts from './Alert'
import { useNavigate } from 'react-router-dom'

const Welcome = (props) => {
  const { alertClose, alert } = props
  const context = useContext(userContext)
  const { handleAuthentication, handleUserChange, user } = context
  console.log(user);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("auth_token")
    if (token) {

      showUserDetail(token)
    }

  }, [])

  const showUserDetail = async (token) => {
    if (!token) {
      return
    }
    const url = "http://localhost:3002/api/auth/getuser"
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth_token": token
      }
    })
    const json = await response.json()
    if (json.success) {
      handleAuthentication(true)
      handleUserChange(json.user)
    }

  }

  return (
    <>
      <div>
        <button >{user[0].fullName}</button>
      </div>
      {alert === "" ? "" : <Alerts alertClose={alertClose} />}
    </>
  )
}

export default Welcome