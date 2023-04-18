/* eslint-disable no-unused-vars */
import React from 'react'
import "./VideoStyles.css"
import spaceVideo from "../assets/space.mp4"
import {Link} from 'react-router-dom'

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
