import React, { useState } from 'react'
import "./comments.css"
import { DisplayComments } from './displayComments';
export const Comments = () => {
  const[commentText,setCommentText]=useState("");
  const handleSubmit=(e)=>{
  e.preventDefault();
  }
  const commentList=[
   {
    _id:1,
    commentBody:"hello",
    userCommented:"abc"
   },
   {
    _id:2,
    commentBody:"hey this is nice video",
    userCommented:"gunel"
   },
  ]
  return (
    <>
     <form onSubmit={handleSubmit} className='commentsSubFormComments'>
      <input onChange={e=>setCommentText(e.target.value)} type="text" placeholder='add comment...' className="commentIbox"/>
      <input type="submit" value="add" className='commentAddBtnComment'/>
      </form> 
      <div className="displayCommentContainer">
       {commentList.map(m=>{
        return(
          <DisplayComments ctId={m._id} commentBody={m.commentBody} userCommented={m.userCommented}/>
        )
       })}
      </div>
    </>
  )
}
