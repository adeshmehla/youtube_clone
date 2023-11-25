import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {BsMicFill} from 'react-icons/bs';
import './searchBar.css'
export const Searchbar = () => {
  return (
    <div className='searchBarContainer'>
        <div className="searchBarSubContainer">
            <div className="searchDiv">
      <input type="text" className='iBoxSearchBar'/>
          <FaSearch className="searchBarSearchIcon"/>
          <BsMicFill className="micSearchIcon"/>
        
            </div>
        </div>
    </div>
  )
}

