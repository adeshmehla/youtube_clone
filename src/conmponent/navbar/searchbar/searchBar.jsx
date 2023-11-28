import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa';
import {BsMicFill} from 'react-icons/bs';
import './searchBar.css'
import { SearchList } from './searchList/searchList';
export const Searchbar = () => {
  const[searchQuery,setSearchQuery]=useState("");
  const[searchListA,setSearchList]=useState("");
  const TitleArray =["video1","Animation Video","Indian song","Punjabi Song"].filter(i=>i.toUpperCase().includes(searchQuery.toUpperCase()))
  return (
    <div className='searchBarContainer'>
        <div className="searchBarSubContainer">
            <div className="searchDiv">
      <input type="text" className='iBoxSearchBar' value={searchQuery} placeholder='search...' onChange={(e)=>setSearchQuery(e.target.value)} onClick={(e)=>setSearchList(true)}/>
          <FaSearch className="searchBarSearchIcon" onClick={(e)=>setSearchList(false)}/>
          <BsMicFill className="micSearchIcon"/>
          {searchQuery && searchListA && <SearchList setSearchQuery={setSearchQuery} TitleArray={TitleArray}/>}
        
            </div>
        </div>
    </div>
  )
}

