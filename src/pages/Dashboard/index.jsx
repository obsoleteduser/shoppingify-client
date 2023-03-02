import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { ItemAdder } from '../../components/ItemAdder'
import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import { Products } from '../Products'
import { Statistics } from '../Statistics'
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
     <Navbar></Navbar>
        <Outlet></Outlet>
      <ItemAdder></ItemAdder>
    </div>
  )
}
