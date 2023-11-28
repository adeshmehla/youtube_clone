import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri'
import "./likedWatchLaterSaveBtns.css"
export const LikedWatchLaterSaveBtns = () => {
    const [saveVideo, setSaveVideo] = useState(true)
    const [likeBtn, setLikeBtn] = useState(false)
    const [likeBtnCount, setLikeBtnCount] = useState(0)
    const [displikeBtn, setDislikeBtn] = useState(false)
    const [dislikeBtnCount, setDislikeBtnCount] = useState(0)
    const handleSavedVideo=()=>{
        if(saveVideo){
            setSaveVideo(false)
        }else{
            setSaveVideo(true)
        }
    }
    
    const handleLikeVideoBtn=()=>{
        if(likeBtn){
            setLikeBtn(false)
            setLikeBtnCount(pre=>pre-1)
        }else{
            setLikeBtn(true)
            setLikeBtnCount(pre=>pre+1)
        }
    }
    const handleDislikeVideoBtn=()=>{
        if(displikeBtn){
            setDislikeBtn(false)
            setDislikeBtnCount(pre=>pre-1)
        }else{
            setDislikeBtn(true)
            setDislikeBtnCount(pre=>pre+1)
        }
    }

    return (
        <div className='btnContVideoPage'>
            <div className="btnVideoPage">
                <BsThreeDots />
            </div>
            <div className="btnVideoPage">
                <div className="likeVideoPage" onClick={()=>handleLikeVideoBtn()}>
                    {likeBtn ? <>
                        <AiFillLike  size={22} className='btnsVideoPage' />
                        <b></b>
                    </> : <>
                        <AiOutlineLike size={22} className='btnsVideoPage' />
                    </>
                    }
                    <b>{likeBtnCount}</b>
                </div>
                <div className="likeVideoPage" onClick={()=>handleDislikeVideoBtn()}>
                    {displikeBtn ? <>
                        <AiFillDislike size={22} className='btnsVideoPage' />
                        <b></b>
                    </> : <>
                        <AiOutlineDislike size={22} className='btnsVideoPage' />
                    </>
                    }
                    <b>{dislikeBtnCount}</b>
                </div>
                <div className="likeVideoPage" onClick={()=>handleSavedVideo()}>
                    {saveVideo ? <>
                        <RiPlayListAddFill size={22} className='btnsVideoPage' />
                        <b>Save</b>
                    </> : <>
                        <MdPlaylistAddCheck size={22} className='btnsVideoPage' />
                        <b>Saved</b>
                    </>
                    }
                </div>
                <div className="likeVideoPage">
                    <>
                        <RiHeartAddFill size={22} className='btnsVideoPage' />
                        <b>Thanks</b>
                    </>
                </div>
                <div className="likeVideoPage">
                    <>
                        <RiShareForwardLine size={22} className='btnsVideoPage' />
                        <b>Share</b>
                    </>
                </div>
                
            </div>
        </div>
    )
}

