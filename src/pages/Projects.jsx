
import { useState } from 'react'
import ProjectDisplay from '../components/Project/ProjectDisplay'
useState
const Projects = () => {

  const [category, setCategory] = useState("All")

  return (
    <>
      <ProjectDisplay category={category} setCategory={setCategory}/>
    </>
  )
}

export default Projects