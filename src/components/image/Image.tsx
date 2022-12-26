import React from 'react';
import classNames from 'classnames';

import './Image.css';

interface ImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  circle?: boolean;
  className?: string;
}

const Image = ({
  src,
  alt,
  className,
  width,
  height,
  circle,
  ...attrs
}: ImageProps & React.ComponentPropsWithoutRef<'img'>) => {
  const classes = classNames(className, { circle });

  if (!src) {
    src = `https://via.placeholder.com/${width || 100}x${height || 100}`;
  }

  return (
    <img
      src={src}
      alt={alt || 'image'}
      className={classes}
      width={width || 100}
      height={height || 100}
      {...attrs}
    />
  );
};

export default Image;
