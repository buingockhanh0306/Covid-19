import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Component/Organisms/Navbar';
import Contact from './Component/Page/Contact';
import News from './Component/Page/News';
import Information from './Component/Page/Information';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar/>}>
              <Route path='/' element={<App/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/information' element={<Information/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
