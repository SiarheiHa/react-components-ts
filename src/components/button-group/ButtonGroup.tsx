import React from 'react';
import classNames from 'classnames';

import './ButtonGroup.css';

interface ButtonGroupProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  vertical?: boolean;
}

const ButtonGroup = ({ children, className, vertical, ...attrs }: ButtonGroupProps) => {
  const classes = classNames('btn-group', className, { vertical });

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

export default ButtonGroup;
