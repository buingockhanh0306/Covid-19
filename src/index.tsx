import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Component/Page/Contact'
import News from './Component/Page/News'
import Information from './Component/Page/Information'
import Layout from './Component/Page/LayOut'
import ChakraUI from './Component/Page/ChakraUI'
import { ChakraProvider, Heading } from '@chakra-ui/react'

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<App />} />
              <Route path="/news" element={<News />} />
              <Route path="/information" element={<Information />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chakra" element={<ChakraUI />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
)
reportWebVitals()
