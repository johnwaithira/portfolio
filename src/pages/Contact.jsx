import React, { useContext } from 'react'
import { ProjectsContext } from '../context/ProjectContext'
import ContactComponent from '../components/Contact/ContactComponent'

const Contact = () => {

  const { my_contact } = useContext(ProjectsContext)
  // console.log(my_contact);  
  return (
    <ContactComponent/>
  )
}

export default Contact