import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='Form'>
      <form>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <button className='btn'>Schedule Your Appointment</button>

      </form>
    </div>
  )
}

export default Form
