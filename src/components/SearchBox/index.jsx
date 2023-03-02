import React from 'react'
import './SearchBox.css'
import { ReactComponent as SearchIcon } from '../../assets/magnifying-glass-solid.svg'

export const SearchBox = () => {
  return (
    <div className='search-box'>
        <SearchIcon className="search-icon"/>
        <input className='search-input' type="text" placeholder="Search item"/>
          
    </div>
  )
}
