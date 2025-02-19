import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import _404 from '../pages/error/_404'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import ProjectsDetails from '../pages/ProjectsDetails'
import Activities from '../pages/Activities'
const MyRoute = () => {

  // const validRoutes = [

  return (
     <div className="lg:px-10 sm:px-7 md:px-5">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/projects/:id" element={<ProjectsDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<_404 />} />
    </Routes>
     </div>
  )
}

export default MyRoute