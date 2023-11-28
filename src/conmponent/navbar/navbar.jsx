import React from 'react'
import './navbar.css'
import { Searchbar } from './searchbar/searchBar'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Navbar = ({togleDrawer}) => {
  const currentUser = {
    result: {
      email: "bemehla@gmail.com",
      joinedOn: "2018-07-22t09:43:44.875Z"
    }
  }
  return (
    <div className="navbarContainer">
      <div className="burgerLogoNavbar"></div>
      <div className="burger" onClick={()=>togleDrawer()}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <Link to={"/"} className="logo_div_navbar ">
        <img className="logo_title_navbar" src="/assets/youtube-logo.jpg" alt="logo" />
        <p className='logo_title_navbar'>Youtube</p>
      </Link>
      <Searchbar />
      <RiVideoAddLine size={22} className='videoBellNavbar' />
      <div className="appBoxContainer">
        <p className="appBoxes"></p>
        <p className="appBoxes"></p>
        <p className="appBoxes"></p>
        <p className="appBoxes"></p>
        <p className="appBoxes"></p>
        <p className="appBoxes"></p>
        <p className="appBoxes"></p>
        <p className="appBoxes"></p>
        <p className="appBoxes"></p>
      </div>
      <IoMdNotificationsOutline size={22} className="micSearchBar" />
      <div className="authContNavbar">
        {currentUser ? (
          <>
            <div className="channelLogoApp">
              <p className="fstCharLogoApp">
                {
                  currentUser?.result.name ? (
                    <>
                      {currentUser?.result.name.charAt(0).toUpperCase()}
                    </>
                  ):<>
                  {currentUser?.result.email.charAt(0).toUpperCase()}
                  </>}
              </p>
            </div>
          </>
              ) : (
          <>
            <p className="authBtn">
              <BiUserCircle size={22} />
              <b>Sign In</b>
            </p>
          </>)}
      </div>
    </div>
  )
}
