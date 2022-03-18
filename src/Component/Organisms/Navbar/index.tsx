import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './style.css'

function Navbar() {

    window.addEventListener('scroll', () => {
        let navbar = document.querySelector<HTMLInputElement>('.navbar')
        if (window.pageYOffset >= 70) {
            navbar?.classList.add('navbar-scroll')
        }
        else {
            navbar?.classList.remove('navbar-scroll')
        }
    })
    
    window.addEventListener('scroll', () => {
        let toTop = document.querySelector<HTMLInputElement>('.toTop')
        if (window.pageYOffset >= 300) {
            toTop?.classList.add('toTop-active')
        }
        else {
            toTop?.classList.remove('toTop-active')
        }
    })
    return (
        <>
            <div className='heading-navbar'>
                <h5 className='heading'>Covid 19</h5>
                <div className='navbar'>
                    <div className='nav-menu'>
                        <Link className='navbar-link' to='/'>Thông tin ca bệnh</Link>
                        <Link className='navbar-link' to='/information'>Phòng chống dịch</Link>
                        <Link className='navbar-link' to='/news'>Tin tức</Link>
                        <Link className='navbar-link' to='/contact'>Liên hệ</Link>
                    </div>
                </div>
            </div>
            <div className='content'>
                <Outlet />
            </div>
            <a href='#' className='toTop'>
                <i className="fa-solid fa-arrow-up"></i>
            </a>
        </>
    );
}

export default Navbar;