import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const RequireAuth = () => {

    const auth  = useSelector(state => state.authReducer.auth)

  return (
    auth ? <Outlet></Outlet>
    : <Navigate to="/"/>
  )
}
