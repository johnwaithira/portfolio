import React, { useContext } from 'react'
import { ProjectsContext } from '../../context/ProjectContext.jsx'
import ProjectItem from '../ProjectItem/ProjectItem.jsx'
import ProjectMenu from '../ProjectMenu/ProjectMenu.jsx'
import './ProjectDisplay.css'
// import { project_category } from '../../assets/data.jsx'

const ProjectDisplay = ({ category, setCategory }) => {

    const { projects_list } = useContext(ProjectsContext)


  
    return (
        <div className="project-section">
            <h1>My Projects</h1>
            <div>
                <ProjectMenu category={category} setCategory={setCategory} />
            </div>
            <div className="project-list">
                {
                    projects_list.map((item, index) => {
                        // if(!item.category )
                        if (category === "All" || category === item.category) {
                            return <ProjectItem key={index} id={item.id} name={item.name} project_banner={item.project_banner} description={item.description} link={item.link} stack={item.stack} created_at={item.created_at} />
                        }
                    })

                }
            </div>
        </div>
    )
}

export default ProjectDisplay