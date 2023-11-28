import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import { AllRoutes } from './conmponent/allRoutes';
import { Navbar } from './conmponent/navbar/navbar';
import { useState } from 'react';
import { LeftSiderBar } from './conmponent/leftSidebar/leftSiderBar';
import { DrawerSideBar } from './conmponent/leftSidebar/DrawerSideBar';
function App() {
  const[togleDrawerSideBar,setTogleDrawerSideBar]=useState({
    display:"none"
  })
  const togleDrawer=()=>{
    if(togleDrawerSideBar.display==="none"){
      setTogleDrawerSideBar({
        display:"flex"
      })
    }else{
      setTogleDrawerSideBar({
        display:"none"
      })
    }
  }
  return (
    <Router>
      <Navbar togleDrawer={togleDrawer}/>

    <DrawerSideBar togleDrawer={togleDrawer} togleDrawerSideBar={togleDrawerSideBar} />   
      <AllRoutes/>
    </Router>
  );
}

export default App;
