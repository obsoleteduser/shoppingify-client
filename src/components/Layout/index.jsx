import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Navbar } from '../Navbar'

export const Layout = () => {
  return (
    <div className='layout'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
