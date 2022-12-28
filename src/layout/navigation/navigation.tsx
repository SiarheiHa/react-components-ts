import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const routes = {
  '/': 'Home',
  '/button': 'Button',
  '/button-group': 'Button Group',
  '/icon': 'Icon',
  '/image': 'Image',
  '/chip': 'Chip',
  '/badge': 'Badge',
  '/list-group': 'List Group',
  '/input': 'Input',
};

const Navigation = () => (
  <div className='navigation'>
    <div className='logoWrapper'>
      <img
        src='https://www.vectorlogo.zone/logos/reactjs/reactjs-card.png'
        height='60'
        alt='logo'
      />
    </div>
    <nav>
      <ul className='nav'>
        {Object.entries(routes).map((route) => (
          <li key={route[0]}>
            <NavLink to={route[0]}>{route[1]}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navigation;
