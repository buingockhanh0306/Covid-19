import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import { useTranslation } from 'react-i18next'
import { Switch } from '@chakra-ui/react'
import { MdLocationPin } from 'react-icons/md'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [value, setValue] = useState('en')

  const handleChangeLanguage = (language: string) => {
    language === 'vn' ? setValue('en') : setValue('vn')
    i18n.changeLanguage(language)
  }

  const Links = [
    {
      to: "/",
      element: t('home')
    },
    {
      to: "/information",
      element: t('information')
    },
    {
      to: "/news",
      element: t('news')
    },
    {
      to: "/contact",
      element: t('contact')
    }
  ]


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
            {Links.map((link, index) =>
              (
                <Link
                  key={index}
                  className="navbar-link"
                  to={link.to}
                >
                    {link.element}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
