import React from 'react'
import './home.css'
import { ShowVideogrid } from '../../conmponent/showVideoGrid/showVideogrid'
import { LeftSiderBar } from '../../conmponent/leftSidebar/leftSiderBar'
import video1 from '../../video/video1.mp4'
import video2 from '../../video/video2.mp4'
import video3 from '../../video/video3.mp4'
const vids =[
  {
    _id:1,
    video_src:video1,
    channel:"5bbgty54456bvbghy",
    title:"video 1",
    uploader:"zoo",
    discription:"discription of video 1"
  },
  {
    _id:2,
    video_src:video2,
    channel:"fdg6666554456bvbghy",
    title:"video 2",
    uploader:"syan",
    discription:"discription of video 2"
  },
  {
    _id:3,
    video_src:video3,
    channel:"c333354456bvbgg655",
    title:"video 3",
    uploader:"abc",
    discription:"discription of video 3"
  },
  {
    _id:4,
    video_src:'video4',
    channel:"656jkkjfr6666",
    title:"video 4",
    uploader:"mnu",
    discription:"discription of video 4"
  },
 ]
export const Home = () => {

   const NavList=[
    "All","Python","Movies","C++","Music","Facts","Horror","Travel","Raods","Gaming","Science"
   ]
  return (
    <div className='homeContainer'>
        <LeftSiderBar/>
      <div className="homeSubContainer">
        <div className="navigationHome">
          {
            NavList.map(m=>{
             return(
              <p key={m} className="btnNavHome">
                {m}
              </p>)
            })
          }
        </div>
    <ShowVideogrid vids={vids}/>
      </div>
    </div>
  )
}
