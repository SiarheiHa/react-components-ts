import React from 'react';
import classNames from 'classnames';

import './TabBarNav.css';

interface TabBarNavProps {
  navLabel?: string;
  className?: string;
  onChangeActiveTab: (navLabel: string) => void;
}

const TabBarNav = ({ navLabel = 'Tab', className, onChangeActiveTab }: TabBarNavProps) => {
  const classes = classNames(className, 'nav-item');

  return (
    <button type='button' className={classes} onClick={() => onChangeActiveTab(navLabel)}>
      {navLabel}
    </button>
  );
};

export default TabBarNav;
