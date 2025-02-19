import React from 'react'
import { assets } from '../../assets/data'
import './Home.css'
import image_4 from '../../assets/jon.jpg'
import Button from '../Button/Button'


const HomeComponent = () => {
  return (
    <div className="about-div">
      <div className="img-div col-4">
        <div style={{
          backgroundImage: `url(${image_4})`
        }} className="img-background"></div>
      </div>
      <div className="dec col-7">
        <div className="p-5">
          <p className='text-xl font-sans pb-4 sm:pb-0'>
          I am a highly motivated Software Developer and IoT Solutions Engineer with a Bachelor’s degree in Computer Science from Meru University of Science and Technology. My expertise spans web and mobile application development, IoT systems, and AI-driven solutions, with proficiency in PHP, [Laravel], React Native, Node.js, [MERN] stack and AI technologies.





Let’s connect to explore opportunities for innovation and impact..</p>
          <p className="py-7 text-3xl text-blue-500">John Waithira</p>
          <p className="text-gray-600 ">Software Developer</p>

          <Button />
        </div>
      </div>
    </div>
  )
}

export default HomeComponent