import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ProjectsContext } from '../../context/ProjectContext'
import './ProjectDetail.css'

const ProjectDetail = ({ projectid }) => {

    const { projects_list } = useContext(ProjectsContext)

    const project = projects_list.find(proj => proj.id === parseInt(projectid))

    console.log();

    const back = ()=>{
        window.history.back()
    }

    if (!project) {
        return <>
            <div className='h-[70vh] flex justify-center  items-center'>
                <div>
                    <div>
                        <div className='text-center'>
                            <h1 className='text-8xl pb-10 font-bold font-serif'>404</h1>
                            <p>Project not found</p>
                            <button className='mt-3 outline-1 outline-gray-400 px-10 py-3 rounded-3xl cursor-pointer' onClick={back}>
                                Go back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }

    const current = project.id;

    const [previousProjectId, setPreviousProject] = useState(null)
    const [nextProjectId, setNextProject] = useState(null)

    useEffect(() => {
        setPreviousProject(current > 1 ? current - 1 : null)
        setNextProject(current < projects_list.length ? current + 1 : null)

    }, [current, projects_list.length])

    const get = (index) => {
        const proj = projects_list.find(p => p.id === parseInt(index))
        return proj ? proj.name : "Unknow project"
    }
    return (
        <>
            <div className="my-5 ">
                <a className=' lg:px-20 lg:my-10  md:px-20 md:my-10 sm:px-10 sm:my-50 pointer' onClick={back}>Back</a>
            </div>
            <div className='px-0 sm:px-6 md:px-10 lg:px-15' >
                <div className='project-detail-section'>
                    <div className='project-banner col-5 col-m-7 col-s-12' style={{ backgroundImage: `url(${project.project_banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "cente" }}>
                    </div>
                    <div className='project-banner-title col-5 col-m-5 col-s-12'>
                        <p className='project-title '>{project.name}</p>
                        <p>{`{ ${project.slag} }`}</p>
                        <div className="project-links">
                            {
                                project.link.map((linkitem, index) => {
                                    return (
                                        <a key={index} target='_blank' href={linkitem.link_address}>
                                            <p>{linkitem.link_name}</p>
                                        </a>
                                    )
                                })
                            }
                        </div>
                        <div className="project-stacks">
                            {
                                project.stack.map((stack, index) => {
                                    return (
                                        <div key={index} className='stack'>
                                            <p>{stack}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="description">
                    <div className="p-0 sm:p-5 md:p-10 lg:p-15 xl:p-20 ">
                        <small><strong>Project Overview</strong></small>
                        <div dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>

                </div>

                <div className="prevBackBtn mb-30">
                    <div>
                        {
                            previousProjectId &&
                            <Link to={`/projects/${previousProjectId}`}><button>{get(previousProjectId)}</button></Link>
                        }
                    </div>
                    <div>
                        {
                            nextProjectId &&
                            <Link to={`/projects/${nextProjectId}`}><button>{get(nextProjectId)}</button></Link>
                        }
                    </div>
                </div>
            </div>
        </>


    )
}

export default ProjectDetail
