import React from 'react'
import { ShowVideoList } from '../showVideoList/showVideoList'

export const WHLVideoList = ({ page, videoList }) => {
  return (
    <>
     {
        videoList.map(m=>{
            return(
                <ShowVideoList videoId={m._id} key={m._id}/>
           
                )
        })
     } 
    </>
  )
}
