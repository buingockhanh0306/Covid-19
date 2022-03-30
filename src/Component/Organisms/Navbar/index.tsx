import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar: React.FC = () => {
  window.addEventListener('scroll', () => {
    const toTop: HTMLInputElement | null = document.querySelector<HTMLInputElement>('.toTop')
    if (window.pageYOffset >= 300) {
      toTop?.classList.add('toTop-active')
    } else {
      toTop?.classList.remove('toTop-active')
    }
  })

  return (
    <>
      <div className="heading-navbar">
        <Link to="/" className="heading">
          Covid 19
        </Link>
        <div className="navbar">
          <div className="nav-menu">
            <Link className="navbar-link" to="/">
              Thông tin ca bệnh
            </Link>

            <Link className="navbar-link" to="/information">
              Phòng chống dịch
            </Link>

            <Link className="navbar-link" to="/news">
              Tin tức
            </Link>

            <Link className="navbar-link" to="/contact">
              Liên hệ
            </Link>

            <Link className="navbar-link" to="/chakra">
              ChakraUI
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
