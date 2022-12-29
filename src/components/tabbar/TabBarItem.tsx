import React from 'react';
import classNames from 'classnames';

import './TabBarItem.css';

export interface TabBarItemProps {
  label: string;
  children?: JSX.Element | JSX.Element[];
  activeTab?: string;
}

const TabBarItem = ({
  children,
  label,
  activeTab,
  ...attrs
}: TabBarItemProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = classNames('tab-bar-item', { active: activeTab === label });

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

export default TabBarItem;
