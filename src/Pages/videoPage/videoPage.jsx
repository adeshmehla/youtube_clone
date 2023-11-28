import React from 'react';
import video1 from '../../video/video1.mp4';
import './videoPage.css'
import { LikedWatchLaterSaveBtns } from './likedWatchLaterSaveBtns';
import { Comments } from '../../conmponent/comments/comments';
export const VideoPage = () => {
    return (
        <>
            <div className="containerVideoPage">
                <div className="subContainerVideoPage">
                    <div className="videoDisplayScreenVideoPage">
                        <video src={video1}
                            className='videoShowVideo_VideoPage'
                            controls
                            autoPlay
                        >
                        </video>
                        <div className="videoDetailsVideoPage">
                            <div className="videoBtnsTitleVideoPage">
                                <p className='videoTitleVideoPage'>Title</p>
                                <div className="viewsDateBtnsVideoPage">
                                    <div className='viewsVideoPage'>
                                        5 views <div className="dot"></div> uploed 1 year ago
                                    </div>
                                    <LikedWatchLaterSaveBtns/>
                                </div>
                            </div>
                            <div className='channalDetailsVideoPage'>
                                <b className='channelLogoVideoPage'>
                                    <p>C</p>
                                </b>
                                <p className="channelNameVideoPage">Channel Name</p>
                            </div>
                            <div className="commentVideoPage">
                                <h2>
                                   <u>Comments </u>
                                    </h2>
                                    <Comments/>
                            </div>
                        </div>
                    </div>
                    <div className="moreVideoBar">
                        More Videos
                    </div>
                </div>
            </div>
        </>
    )
}
