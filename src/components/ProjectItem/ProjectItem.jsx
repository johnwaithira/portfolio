import React from 'react'
import './ProjectItem.css'
import Truncate from '../../Constant/Truncate'
import { Link } from 'react-router-dom'
const ProjectItem = ({ id, name, project_banner, description, link, stack, created_at
}) => {
    return (
        <>
            <Link className="project-item-card col-s-5 col-m-3 col-3 " to={`/projects/${id}`}>
                <div className='project-div'>
                    <div className="project-item">
                    <div style={{ minHeight: "150px", backgroundImage: `url(${project_banner})`, width: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat : "no-repeat" , borderRadius: "20px"}}>

</div>
                        <p className="project-name">{name}</p>
                        {/* <div className="project-description">
                        <Truncate text={description}/>
                    </div>
                    <div className="project-stack">
                        {
                            stack.map((stackItem, index) => {
                               return (
                                <div className="stack-div">
                                    <p className='stack-item'>{stackItem}</p>
                                </div>
                               )
                                
                            })
                        }
                    </div>

                    <div className="project-link">
                        {
                            link.map((linkItem, index) => {
                                return (
                                    <div className="links" key={index}>
                                        <a target='_blank' href={linkItem.link_address}>{linkItem.link_name}</a>
                                    </div>
                                )
                            })
                        }
                    </div> */}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProjectItem