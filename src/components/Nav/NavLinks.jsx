import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '/logo2.svg'
import './Nav.css'
import close_icon from '../../assets/cross_icon.png'
import { ProjectsContext } from '../../context/ProjectContext'


const NavLinks = () => {

  const {theme, toggleTheme} = useContext(ProjectsContext)

  

  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  const isProjectActive = location.pathname.startsWith("/projects")

  const [showMenu, setShowMenu] = useState(false)

 
  return (
    <div className='navigation'>

      <Link to="/" onClick={() => setMenu("home")} >
        <img style={{ width: "100px" }} src={logo} alt="" />
      </Link>
      {
        showMenu &&
        <div className="close" onClick={()=>setShowMenu(false)}>
          <img src={close_icon} alt="" />
        </div>
      }
      <div className={`nav-link-style dark:text-white ${showMenu ? "show-menu" : ""}`} >
        <ul>

          <li onClick={()=>setShowMenu(false)} className={activeLink === "/" ? "active-bar" : ""}><Link to='/' >Home</Link></li>
          {/* <li  className={activeLink === "/activities" ? "active-bar" : ""}><Link to='/activities' >Activities</Link></li> */}
          {/* <li onClick={()=>setShowMenu(false)} className={activeLink == "/about" ? "active-bar" : ""}><Link to='/about' >About</Link></li> */}
          <li onClick={()=>setShowMenu(false)} className={isProjectActive ? "active-bar" : ""}><Link to='/projects'  >Projects</Link></li>
          <li onClick={()=>setShowMenu(false)} className={`${activeLink == "/contact" ? "active-bar" : "" } dark:text-white`}><Link to='/contact' >Contact</Link></li>
          <button className=" px-[10px] rounded-xl pointer" style={{
            border: "1px solid green"
          }} onClick={toggleTheme}>{ theme === "light" ? "🌙 " : "☀️" }</button>
        </ul>
      </div>
      <div className="toogle-menu" onClick={()=>setShowMenu(true)}>
        <div className="dot"></div>
        <div className="dot middle"></div>
        <div className="dot"></div>
      </div>
    </div>
  )
}

export default NavLinks
