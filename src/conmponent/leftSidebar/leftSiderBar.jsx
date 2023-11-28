import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {MdExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from 'react-icons/md'
import './leftBar.css'
import {NavLink} from 'react-router-dom'
export const LeftSiderBar = () => {
  return (
    <div className='leftSideBarContainer'>
      <NavLink to={'/'} className="iconSideBarDiv">
       <AiOutlineHome size={22} className="iconSideBar"/> 
      <div className="textSideBarIcon">Home</div>
      </NavLink>
      <NavLink to={"/explore"} className="iconSideBarDiv">
       <MdExplore size={22} className="iconSideBar"/> 
      <div className="textSideBarIcon">Explore</div>
      </NavLink>
      <NavLink to={"/subscriptions"} className="iconSideBarDiv">
       <MdOutlineSubscriptions size={22} className="iconSideBar"/> 
      <div className="textSideBarIcon" style={{fontSize:"9px"}}>Subscriptions</div>
      </NavLink>
      <NavLink  to ={'/library'} className="iconSideBarDiv">
       <MdOutlineVideoLibrary size={22} className="iconSideBar"/> 
      <div className="textSideBarIcon">Library</div>
      </NavLink>
    </div>
  )
}
