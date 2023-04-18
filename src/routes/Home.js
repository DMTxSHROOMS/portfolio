import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer'
import Content from '../components/Content'
import Content1 from '../components/Content1'





const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
      <Video />
      </div>

      <br />
      <div>
        <Content1 />
      </div>
      <br />
      <br />
      <br />

      <br />
      <div>
      <Content /> 
     </div>
     <br />
      <div>
      <Footer />
     </div>
    </div>
  )
}

export default Home
