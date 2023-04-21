// Divyesh Pawar
// 8744465

import React from 'react'
import './Training.css'


import Madrid from '../assets/madrid.jpg'
import GSW from '../assets/gsw.jpg'
import Music from '../assets/music1.jpg'
import Music2 from '../assets/music2.jpg'

const Training = () => {
  return (
    <div>
                   <div >
                   <h1>Meet the real me</h1>
                    </div>         
    {/* hobby 1 */}
        <div className='training'>
        <div className='left'>
            
            <p>Like every college kid I was raised listening to old school hip-hops and watching basketball</p>
            <p> my hobbies include playing basketball and football, I have been a loyal fan to  Warriors and Madrid since childhood</p>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Madrid} className='img' alt='' />

                </div>
                <div className='image-stack bottom'>
                    <img src={GSW} className='img' alt='' />
                </div>
            </div>
        </div>
      
    </div>
    {/* hobby 2 */}
    
        <div className='training'>
        <div className='left'>
            
        <p> Since college I started playing music and just in few years I was composing it, So when I am not on my laptop  i am surely playing some beats on my mixer thats what helps me to focus in my free time</p>
            <p>Click the link below to visit my playlist </p>
            <a href='https://music.apple.com/us/album/luv-sic-hexalogy/1361503700' target="" rel=''>Bless your Ears</a> </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                <img src={Music} className='img' alt='' />

</div>
<div className='image-stack bottom'>
    <img src={Music2} className='img' alt='' />
                </div>
            </div>
        </div>
      
    </div>

    </div>
    
  )
}

export default Training
