import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { ItemAdd } from '../../components/ItemAdder'
import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import { ShopListMaker } from '../../components/ShopListMaker'
import { Products } from '../Products'
import { Statistics } from '../Statistics'
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
     <Navbar></Navbar>
        <Outlet></Outlet>
      <ItemAdd/>
    </div>
  )
}
