// Student Name- Divyesh Pawar
// 8744465

import React from 'react'
import './ContentStyles.css'
import Intro1 from '../assets/rrr.jpg'
import Intro2 from '../assets/rrr2.jpg'
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.jpg'
import Mysql from '../assets/mysql1.jpg'
import Mysql2 from '../assets/mysql2.jpg'
import Adobe from '../assets/adobe.jpg'
import Adobeil from '../assets/adobe2.jpg'
import Graphql from '../assets/graphql.jpg'
import Apollo from '../assets/apollo.jpg'
import Figma from '../assets/figma.jpg'




function Content() {
  return (
    <div>
      <div className='content'>
      
        <div className='container'>
        <div className='left'>
            <h1>Technologies I am using</h1>
            </div>
        <div className='right'>
        <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Intro1} className='img' alt='' />

                </div>
                <div className='image-stack bottom'>
                    <img src={Intro2} className='img' alt='' />
                </div>
            </div>
        </div>
        </div>
        {/* React JS */}
        <div className='container'>
        <div className='left'>
        <div className='img-container'>
                <div className='image-stack top'>
                    <img src={React1} className='img' alt='' />

                </div>
                <div className='image-stack bottom'>
                    <img src={React2} className='img' alt='' />
                </div>
            </div>            </div>
        <div className='right'>
        <div className='img-container'>
        <div className='left'>
            <h1>React JS </h1>
            </div>
            </div>
        </div>
        </div>
        {/* Mysql */}
        <div className='container'>
        <div className='left'>
            <h1>MySQL</h1>
            </div>
        <div className='right'>
        <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Mysql} className='img' alt='' />

                </div>
                <div className='image-stack bottom'>
                    <img src={Mysql2} className='img' alt='' />
                </div>
            </div>
        </div>
        </div>
        {/* Graphql */}
        <div className='container'>
        <div className='left'>
        <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Graphql} className='img' alt='' />

                </div>
                <div className='image-stack bottom'>
                    <img src={Apollo} className='img' alt='' />
                </div>
            </div>            </div>
        <div className='right'>
        <div className='img-container'>
        <div className='left'>
            <h1>Graphql </h1>
            </div>
            </div>
        </div>
        </div>
        {/* Adobe */}
        <div className='container'>
        <div className='left'>
            <h1>Adobe Xd/  Adobe Illustrator</h1>
            </div>
        <div className='right'>
        <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Adobe} className='img' alt='' />

                </div>
                <div className='image-stack bottom'>
                    <img src={Adobeil} className='img' alt='' />
                </div>
            </div>
        </div>
        </div>
        {/* Figma */}
        <div className='container'>
        <div className='left'>
        <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Figma} className='img' alt='' />

                </div>
                
            </div>            </div>
        <div className='right'>
        <div className='img-container'>
        <div className='left'>
            <h1>Figma </h1>
            </div>
            </div>
        </div>
        </div>
        {/* <div className='nav-links'>
        <Link to='/pricing' className='btn'>IT development Experience</Link>
        <Link to='/pricing' className='btn btn-dark'> Sales Professional</Link>
        </div>  */}
        <div>

        </div>
        </div>
    </div>
  )
}

export default Content
