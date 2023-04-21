// Student Name- Divyesh Pawar
// 8744465

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
        <label>Date for appointment</label>
        <input type='date'></input>
        <button className='btn'>Schedule Your Appointment</button>

      </form>
    </div>
  )
}

export default Form
