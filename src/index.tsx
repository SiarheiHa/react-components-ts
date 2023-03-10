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
import ImageSandbox from './components/image/Sandbox';
import ChipSandbox from './components/chip/Sandbox';
import BadgeSandbox from './components/badge/Sandbox';
import ListGroupSandbox from './components/list-group/Sandbox';
import InputSandbox from './components/input/Sandbox';
import TabbarSandbox from './components/tabbar/Sandbox';
import TooltipSandbox from './components/tooltip/Sandbox';
import ModalSandbox from './components/modal/Sandbox';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/button' element={<ButtonSandbox />} />
        <Route path='/button-group' element={<ButtonGroupSandbox />} />
        <Route path='/icon' element={<IconSandbox />} />
        <Route path='/image' element={<ImageSandbox />} />
        <Route path='/chip' element={<ChipSandbox />} />
        <Route path='/badge' element={<BadgeSandbox />} />
        <Route path='/list-group' element={<ListGroupSandbox />} />
        <Route path='/input' element={<InputSandbox />} />
        <Route path='/tabbar' element={<TabbarSandbox />} />
        <Route path='/tooltip' element={<TooltipSandbox />} />
        <Route path='/modal' element={<ModalSandbox />} />
      </Routes>
    </App>
  </BrowserRouter>,
);
// registerServiceWorker();
