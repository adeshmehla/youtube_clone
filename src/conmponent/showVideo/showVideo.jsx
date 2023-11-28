import React from 'react'
import "./showVideo.css"
import {Link} from 'react-router-dom'
export const ShowVideo = ({vid}) => {
  return (
    <>
    <Link to={`/videopage/${vid._id}`}>
    <video src={`${vid?.video_src}`} 
    className="videoShowVideo"/>
    </Link>
    <div className="videoDescription">
      <div className="channal_logo_app">
<div className="fstCharLogoApp">
  <>{vid?.uploader?.charAt(0).toUpperCase()}</>
</div>
      </div>
      <div className='videoDetails'>
        <p className="titleVidShowVideo">{vid.title}</p>
        <pre className="vidViewUploadTime">2-04-2020</pre> 
        <pre className="vidViewUploadTime">
          5 Views <div className="dot"></div> video uploaded 1 year ago </pre> 
      </div>
    </div>
    </>
  )
}

