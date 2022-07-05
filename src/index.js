import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Terms from './views/Terms';
import ScrollToTop from './components/ScrollToTop';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
      </ScrollToTop>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);