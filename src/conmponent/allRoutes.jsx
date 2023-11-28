import React from 'react'
import { Home } from '../Pages/home/home'
import {Routes,Route} from 'react-router-dom'
import { Library } from '../Pages/library/library'
import { YourVideos } from '../Pages/yourVideos/yourVideos'
import { WatchLater } from '../Pages/watchLater/watchLater'
import { WatchHistory } from '../Pages/watchHistory/watchHistory'
import { LikedVidoes } from '../Pages/LikedVideo/likedVidoes'
import { Explore } from '../Pages/explore/explore'
import { VideoPage } from '../Pages/videoPage/videoPage'
export const AllRoutes = () => {
  return (
    <>
        <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/library" element={<Library/>}/>
<Route path="/yourvideos" element={<YourVideos/>}/>
<Route path="/watchlater" element={<WatchLater/>}/>
<Route path="/watchhistory" element={<WatchHistory/>}/>
<Route path="/likedvideos" element={<LikedVidoes/>}/>
<Route path="/explore" element={<Explore/>}/>
<Route path="/videopage/:vid" element={<VideoPage/>}/>
</Routes>
   </>
  )
}
