import React from 'react';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import ButtonSandbox from './components/button/Sandbox';
import ButtonGroupSandbox from './components/button-group/Sandbox';
import IconSandbox from './components/icon/Sandbox';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/button' element={<ButtonSandbox />} />
        <Route path='/button-group' element={<ButtonGroupSandbox />} />
        <Route path='/icon' element={<IconSandbox />} />
      </Routes>
    </App>
  </BrowserRouter>,
);
// registerServiceWorker();
