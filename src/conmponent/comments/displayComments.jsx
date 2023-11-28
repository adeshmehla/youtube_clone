import React, { useState } from 'react'
import "./comments.css"
export const DisplayComments = ({commentBody,userCommented,ctId}) => {
  const[edit,setEdit]=useState(false);
  const[commentBodyText,setCommentBodyText]=useState("");
 const handleEdit=(ctId,CtBody)=>{
setEdit(true);
setCommentBodyText(CtBody)
 }

 const handleSubmit=(e)=>{
  e.preventDefault();
  setEdit(false);
 }
  return (
    <>
    {edit? (<>
      <form
         onSubmit={handleSubmit} 
         className='commentsSubFormComments'>
      <input 
      onChange={e=>setCommentBodyText(e.target.value)} 
      type="text" 
      value={commentBodyText}
       placeholder='edit comment...' 
       className="commentIbox"
       />
      <input 
      type="submit" 
      value="Change" 
      className='commentAddBtnComment'/>
      </form> 
    </>):(<>
    <p className="commentBody">{commentBody}</p>
    </>)}
   <p className="userCommented">- {userCommented} commented</p>
  <p className='editDelDisplayComment'>
    <i onClick={()=>handleEdit(ctId,commentBody)}>Edit</i>
    <i >Delete</i>
  </p>
   </>
  )
}
