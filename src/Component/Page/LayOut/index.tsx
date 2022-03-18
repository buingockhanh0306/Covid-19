import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Organisms/Footer';
import Navbar from '../../Organisms/Navbar';
import './style.css'

function Layout() {
    return (
        <div>
            <Navbar/>
            <div className='content'>
                <Outlet />
            </div>
            <Footer/>
            <a href='#' className='toTop'>
                <i className="fa-solid fa-arrow-up"></i>
            </a> 
        </div>
    );
}

export default Layout;