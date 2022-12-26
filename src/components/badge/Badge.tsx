import React from 'react';
import classNames from 'classnames';

import './Badge.css';

interface BadgeProps {
  value: string | number;
  circle?: boolean;
  className?: string;
  inline?: boolean;
  outer?: boolean;
  warning?: boolean;
  alert?: boolean;
  success?: boolean;
  info?: boolean;
}

const Badge = ({ value, circle, className, inline, outer, ...attrs }: BadgeProps) => {
  const text = typeof value === 'string';

  const classes = classNames(
    'badge',
    { circle },
    className,
    // не верхний правый угол, а онлайново
    { inline },
    // не с фоном, а с границей
    { outer },
    // если передается текст, то компонент подстраивается под его размеры, если число - контент подстроится
    { text },
    { warning: attrs.warning },
    { alert: attrs.alert },
    { success: attrs.success },
    { info: attrs.info },
  );

  return <span className={classes}>{value}</span>;
};

export default Badge;
