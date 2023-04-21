/* Divyesh Pawar
8744465 */
import React from 'react'
import "./VideoStyles.css"
import spaceVideo from "../assets/space.mp4"

const Video = () => {
  return (

    
    <div className='Hero'>
      <div className='video'>
      <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4' />
        </video>
      </div>
    </div>

  )
}

export default Video
