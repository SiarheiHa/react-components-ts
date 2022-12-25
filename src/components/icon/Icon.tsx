import React from 'react';
import classNames from 'classnames';

import './Icon.css';

interface IconProps {
  // лучше было бы faNames вообще убрать и все передавать в className
  faNames?: string | string[];
  className?: string;
  size?: number;
  onClick?: () => void;
  disabled?: boolean;
}

const Icon = ({
  faNames,
  className,
  size,
  onClick,
  disabled,
  ...attrs
}: IconProps & React.ComponentPropsWithoutRef<'i'>) => {
  // используется библиотека font awesome, поэтому в классе fa
  const fontAwesomeClasses = Array.isArray(faNames)
    ? faNames.map((name) => `fa-${name}`).join(' ')
    : `fa-${faNames}`;

  // если в компонент передается onClick, то добавляется класс .func
  const classes = classNames('fa', fontAwesomeClasses, { func: onClick }, { disabled }, className);

  const elemSize: React.CSSProperties | undefined = size ? { fontSize: `${size}rem` } : undefined;

  return (
    <i {...attrs} className={classes} onClick={disabled ? undefined : onClick} style={elemSize} />
  );
};

export default Icon;
