import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const RequireAuth = () => {

    const auth = false

  return (
    auth ? <Outlet></Outlet>
    : <Navigate to="/"/>
  )
}
