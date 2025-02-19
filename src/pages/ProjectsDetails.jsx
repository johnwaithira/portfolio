import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectsContext } from '../context/ProjectContext'
import ProjectDetail from '../components/ProjectDetail/ProjectDetail'

const ProjectsDetails = () => {
  const { id } = useParams()
  

  return (
    <div style={{ margin : "20px" }}>
      <ProjectDetail projectid={id}/>
    </div>
  )
}

export default ProjectsDetails