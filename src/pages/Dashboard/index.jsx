import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Route, Routes } from 'react-router-dom'
import { ItemAdd } from '../../components/ItemAdder'
import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import { ShopListMaker } from '../../components/ShopListMaker'
import useToggle from '../../hooks/useToggle'
import { Products } from '../Products'
import { Statistics } from '../Statistics'
import './Dashboard.css'

export const Dashboard = () => {

  const componentState = useSelector(state => state.componentReducer)
  const { toggleMenu } = useToggle()

  return (
    <div className='dashboard'>
     <Navbar></Navbar>
        <Outlet></Outlet>
     {componentState.itemAdder && <ItemAdd/> }
     {componentState.shopList && <ShopListMaker/> }
    </div>
  )
}
