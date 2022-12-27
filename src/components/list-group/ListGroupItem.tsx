import React from 'react';
import classNames from 'classnames';

import './ListGroupItem.css';

interface ListGroupItemProps {
  children: JSX.Element | JSX.Element[] | string | (JSX.Element | string)[];
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  disabled?: boolean;
  active?: boolean;
}

const ListGroupItem = ({
  children,
  className,
  tag: Tag = 'li',
  disabled,
  active,
  ...attrs
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
ListGroupItemProps & React.ComponentPropsWithoutRef<any>) => {
  const classes = classNames('list-group-item', className, { disabled }, { active });

  if (attrs.href && Tag === 'li') {
    Tag = 'a';
  }

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
};

export default ListGroupItem;
