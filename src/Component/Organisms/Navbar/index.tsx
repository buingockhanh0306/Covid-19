import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
  window.addEventListener('scroll', () => {
    const toTop: HTMLInputElement | null = document.querySelector<HTMLInputElement>('.toTop')
    if (window.pageYOffset >= 300) {
      toTop?.classList.add('toTop-active')
    } else {
      toTop?.classList.remove('toTop-active')
    }
  })
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <div className="heading-navbar">
        <>
          <button onClick={() => handleChangeLanguage('vn')} className="switch">
            VN
          </button>
          <button onClick={() => handleChangeLanguage('en')} className="switch">
            EN
          </button>
        </>
        <Link to="/" className="heading">
          Covid 19
        </Link>
        <div className="navbar">
          <div className="nav-menu">
            <Link className="navbar-link" to="/">
              {t('home')}
            </Link>

            <Link className="navbar-link" to="/information">
              {t('information')}
            </Link>

            <Link className="navbar-link" to="/news">
              {t('news')}
            </Link>

            <Link className="navbar-link" to="/contact">
              {t('contact')}
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
