import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps {
  children?: JSX.Element | string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  active?: boolean;
}

const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}: ButtonProps &
  React.ComponentPropsWithoutRef<'a'> &
  React.ComponentPropsWithoutRef<'button'>) => {
  const onClickAction = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    } else if (onClick) {
      onClick(e);
    }
  };

  const classes = classNames('btn', className, { active });

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag className={classes} disabled={disabled} onClick={onClickAction} {...attrs}>
      {children || 'button'}
    </Tag>
  );
};

export default Button;
