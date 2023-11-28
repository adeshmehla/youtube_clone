import React from 'react'
import './searchList.css'
import { FaSearch } from 'react-icons/fa'
export const SearchList = ({TitleArray,setSearchQuery}) => {

  return (
    <>
      <div className="searchListContainer">
        {TitleArray.map(i=><p key={i} onClick={e=>setSearchQuery(i)} className="titleItemList"><FaSearch/>{i}</p>
            )}
        
        {/* <p className="titleItemList"><FaSearch/>Item2</p>
        <p className="titleItemList"><FaSearch/>Item3</p>
        <p className="titleItemList"><FaSearch/>Item4</p> */}
      </div>
    </>
  )
}

