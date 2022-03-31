import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { useTranslation } from 'react-i18next'
import { Switch } from '@chakra-ui/react'
import { MdLocationPin } from 'react-icons/md'

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

  const [value, setValue] = useState('en')

  const handleChangeLanguage = (language: string) => {
    language == 'vn' ? setValue('en') : setValue('vn')
    i18n.changeLanguage(language)
  }

  return (
    <>
      <div className="heading-navbar">
        <div className="header-navbar">
          <div className="location">
            <MdLocationPin />
            Vietnam
          </div>
          <Link to="/" className="heading">
            Covid 19
          </Link>
          <div>
            ENG
            <Switch defaultChecked ml={2} mr={2} value={value} onChange={e => handleChangeLanguage(e.target.value)} />
            VN
          </div>
        </div>
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

            {/* <Link className="navbar-link" to="/chakra">
              ChakraUI
            </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
