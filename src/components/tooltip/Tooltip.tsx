import React, { useState } from 'react';
import classNames from 'classnames';

import './Tooltip.css';

interface TooltipProps {
  children: string | JSX.Element;
  content: string;
  position: 'top' | 'right' | 'bottom' | 'left';
  style?: React.CSSProperties;
}

const Tooltip = ({ children, content, style = {}, position = 'top' }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const classes = classNames('tooltip', position);

  return (
    <span className='tooltipWrapper'>
      {visible && (
        <span style={style} className={classes}>
          {content}
        </span>
      )}
      <span
        className='targetElement'
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </span>
    </span>
  );
};

export default Tooltip;
