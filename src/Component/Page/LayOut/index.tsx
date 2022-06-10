import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Organisms/Footer'
import Navbar from '../../Organisms/Navbar'
import './style.css'
const LayOut: React.FC = () => {
  const [hiddenArrow, setHiddenArrow] = useState<boolean>(false)
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 300) {
      setHiddenArrow(true)
    } else {
      setHiddenArrow(false)
    }
  })
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
      <a href="#" className={hiddenArrow ? 'toTop toTop-active': "toTop"}>
        <i className="fa-solid fa-arrow-up"/>
      </a>
    </div>
  )
}

export default LayOut
