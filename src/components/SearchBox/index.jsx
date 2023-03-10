import React from 'react'
import './SearchBox.css'
import { ReactComponent as SearchIcon } from '../../assets/magnifying-glass-solid.svg'
import onInput from '../../helpers/onInput'

export const SearchBox = ({search}) => {



  return (
    <div className='search-box'>
        <SearchIcon className="search-icon"/>
        <input name='name' onChange={onInput(search)} className='search-input' type="text" placeholder="Search item"/>
          
    </div>
  )
}
