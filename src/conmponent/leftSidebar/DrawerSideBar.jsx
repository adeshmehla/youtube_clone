import React from 'react'
import './leftBar.css'
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md'
import { FaHistory } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export const DrawerSideBar = ({togleDrawer,togleDrawerSideBar}) => {
  return (
    <div className='drawerLeftSideBarContainer' style={togleDrawerSideBar}>
      <div className='drawerLeftSideBarSubContainer'>
        <div className="drawerLeftSideBar">
          <NavLink to={"/"} className="iconSideBarDiv">
            <p >
              <AiOutlineHome size={22} className='iconSideBar' style={{ margin: "auto 0.7rem" }} />
              <div className="textSideBarIcon">Home</div>
            </p>
          </NavLink >
          <NavLink to={"/explore"} className="iconSideBarDiv">
            <p >
              <MdOutlineExplore size={22} className='iconSideBar' style={{ margin: "auto 0.7rem" }} />
              <div className="textSideBarIcon">Explore</div>
            </p>
          </NavLink>
          <NavLink to={"/subscription"} className="iconSideBarDiv">
            <p  >
              <MdSubscriptions size={22} className='iconSideBar' style={{ margin: "auto 0.7rem" }} />
              <div className="textSideBarIcon">Subscription</div>
            </p>
          </NavLink>
        </div>
        <div className="libraryBtnDrawerLeftSideBar">
          <NavLink to={"/library"} className="iconSideBarDiv">
            <p  >
              <MdOutlineVideoLibrary size={22} className='iconSideBar' style={{ margin: "auto 0.7rem" }} />
              <div className="textSideBarIcon">Library</div>
            </p>
          </NavLink>
          <NavLink to={"/watchhistory"} className="iconSideBarDiv">
            <p  >
              <FaHistory size={22} className='iconSideBar' style={{ margin: "auto 0.7rem" }} />
              <div className="textSideBarIcon">History</div>
            </p>
          </NavLink>
          <NavLink to={"/yourvideos"} className="iconSideBarDiv">
            <p >
              <AiFillPlaySquare size={22} className='iconSideBar' style={{ margin: "auto 0.7rem" }} />
              <div className="textSideBarIcon">Your Video</div>
            </p>
          </NavLink>
          <NavLink to={"/watchlater"} className="iconSideBarDiv">
            <p  >
              <MdOutlineWatchLater size={22} className='iconSideBar' style={{ margin: "auto 0.7rem" }} />
              <div className="textSideBarIcon">Watch Later</div>
            </p>
          </NavLink>
          <NavLink to={"/likedvideos"} className="iconSideBarDiv">
            <p  >
              <AiFillLike size={22} className='iconSideBar' style={{ margin: "auto 0.7rem" }} />
              <div className="textSideBarIcon">Liked Videos</div>
            </p>
          </NavLink>
        </div>
        <div className="subscriptionLsdbar">
          <h3>Your Subscription</h3>
          <div className="channelLsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="channelLsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="channelLsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="channelLsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="channelLsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="channelLsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="channelLsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
        </div>
      </div>
      <div className="drawerLeftSideBarContainer3" onClick={()=>togleDrawer()}>

      </div>
    </div>
  )
}
