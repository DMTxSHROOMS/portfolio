import React from 'react'
import './HeroImageStyles.css'

const HeroImage = () => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      
    </div>
  )
}

export default HeroImage
