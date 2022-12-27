import React from 'react';
import classNames from 'classnames';

import './ListGroup.css';

interface ListGroupProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const ListGroup = ({ children, className, tag: Tag = 'ul', ...attrs }: ListGroupProps) => {
  const classes = classNames('list-group', className);

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
};

export default ListGroup;
