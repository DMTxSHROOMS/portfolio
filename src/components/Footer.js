// Student Name- Divyesh Pawar
// 8744465

import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='Location'>
               <div>
                <p>43.4271150, -80.5301928</p>
               
               </div>
               </div>
               <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff',marginRight: '2rem' }} /> 111-222-5656</h4>
               </div>
               <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff',marginRight: '2rem' }} /> trips@spacex.com</h4>
               </div>

              

            </div>
            <div className='right'>
<p>"Hard Work Beats Talent And obsession beats both"</p>
<div className='social'>
    <FaFacebook size={30} style={{color:'#fff',marginRight: '2rem' }} />
    <FaTwitter size={30} style={{color:'#fff',marginRight: '2rem' }} />
    <FaLinkedin size={30} style={{color:'#fff',marginRight: '2rem' }} />
</div>

               </div>

        </div>
      
    </div>
  )
}

export default Footer
