import React from 'react'
import { ShowVideo } from '../showVideo/showVideo'
import './showVideoGrid.css'
export const ShowVideogrid = ({vids}) => {
 
  return (
    <div className='containerShowVideoGrid'>
     {
      vids?.map(vi=>{
        return (
          <div key={vi._id} className="videoBoxApp">
<ShowVideo vid={vi}/>
          </div>
        )
      })
     }
    </div>
  )
}
