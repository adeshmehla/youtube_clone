import React from 'react'
import { LeftSiderBar } from '../leftSidebar/leftSiderBar'
import "./WHL.css"
import { WHLVideoList } from './WHLVideoList'
export const WHL = ({ page, videoList }) => {
    return (
        <div className='homeContainer'>
            <LeftSiderBar />
            <div className="homeSubContainer">
                <p style={{display:"flex"}} className="containerWH">
                    <div className="boxWHL leftSideWHL">
                        <b>Your {page} Shown Here</b>
                        {
                            page =="History" && <div className="clearHistoryBtn">Clear History
                        </div>
                        }
                    </div>
                    <div className="rightSideWhl">
                        <h1>{page}</h1>
                        <div className="whlList">
                          <WHLVideoList  page={page} videoList={videoList}/>
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}
