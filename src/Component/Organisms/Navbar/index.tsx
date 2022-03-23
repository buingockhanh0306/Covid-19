import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'

function Navbar(): JSX.Element {
  window.addEventListener('scroll', () => {
    let toTop: HTMLInputElement | null = document.querySelector<HTMLInputElement>('.toTop')
    if (window.pageYOffset >= 300) {
      toTop?.classList.add('toTop-active')
    } else {
      toTop?.classList.remove('toTop-active')
    }
  })

  return (
    <>
      <div className="heading-navbar">
        <h5 className="heading">Covid 19</h5>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
