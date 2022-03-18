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
import Contact from './Component/Page/Contact';
import News from './Component/Page/News';
import Information from './Component/Page/Information';
import Layout from './Component/Page/LayOut';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
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
