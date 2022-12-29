import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import TabBarNav from './TabBarNav';
import TabBarItem from './TabBarItem';

import './TabBar.css';

interface TabBarProps {
  children: ReturnType<typeof TabBarItem>[];
  className?: string;
  vertical?: boolean;
}

const TabBar = ({ children, className, vertical, ...attrs }: TabBarProps) => {
  const classes = classNames('tab-bar', className, { vertical });
  const [activeTab, setActiveTab] = useState<null | string>(null);

  useEffect(() => {
    const activeTab = children[0].props.label;
    setActiveTab(activeTab);
  }, [children]);

  const setNewActiveTab = (newTab: string) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
    }
  };

  const renderTabs = () => {
    return children.map((child: ReturnType<typeof TabBarItem>) => {
      const navLabel: string = child.props.label;
      return (
        <TabBarNav
          key={navLabel}
          navLabel={navLabel}
          className={classNames({ active: activeTab === navLabel })}
          onChangeActiveTab={setNewActiveTab}
        />
      );
    });
  };

  return (
    <div className={classes} {...attrs}>
      <div className='tab-bar-nav'>{renderTabs()}</div>
      <div className='tab-container'>
        {React.Children.map(children, (child) => React.cloneElement(child, { activeTab }))}
      </div>
    </div>
  );
};

export default TabBar;
