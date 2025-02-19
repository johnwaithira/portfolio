import React, { useContext } from 'react'
import './ProjectMenu.css'
import { project_category } from '../../assets/data'
import { ProjectsContext } from '../../context/ProjectContext'

const ProjectMenu = ({ category, setCategory }) => {

    const { projects_list } = useContext(ProjectsContext)

    const projectCategories = [...new Set(projects_list.map(p => p.category))]

    const filteredCategories = project_category.filter(cat=>
        projectCategories.includes(cat.project_category_name)
    )
    

    return (
        <div>
            <div>
                <p>Discover my projects</p>
            </div>
            <div className="project-category">
                {
                    
                    [{project_category_name: "All"},...filteredCategories].map((item, index) => {
                        
                        return (
                            <div key={index}>
                                <button className={category === item.project_category_name ? "active" : ""} onClick={() => setCategory(
                                    prev => prev == item.project_category_name ?
                                        "All" :
                                        item.project_category_name
                                )} >{item.project_category_name}</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProjectMenu