import { createContext, useEffect, useState } from 'react'
import { projects_list, my_contact } from '../assets/data.jsx';

export const ProjectsContext = createContext(null)


const ProjectContextProvider = (props) => {

    const [theme, setTheme] = useState(localStorage.getItem("j_theme") || "light")

    useEffect(()=>{
        document.body.className = theme
        localStorage.setItem("j_theme", theme)
    }, [theme])

    const toggleTheme = () =>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    const contextValue = {
        projects_list,
        my_contact,
        theme,
        toggleTheme
    };
    return (
        <ProjectsContext.Provider value={contextValue}>
            {props.children}
        </ProjectsContext.Provider>
    )
}

export default ProjectContextProvider;