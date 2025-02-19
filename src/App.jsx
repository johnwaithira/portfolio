import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Nav/Navbar'
import MyRoute from './route.component/MyRoute'
import { useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()
  const showNav = ['/login', 'signup', '*'].includes(location.pathname)
  
  console.log(showNav);
  

  return (
    <>
      <Navbar/>
      <MyRoute/>
     
    </>
  )
}

export default App
