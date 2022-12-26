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
  alt = 'image',
  className,
  width = 100,
  height = 100,
  circle,
  ...attrs
}: ImageProps & React.ComponentPropsWithoutRef<'img'>) => {
  const classes = classNames(className, { circle });

  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  return <img src={src} alt={alt} className={classes} width={width} height={height} {...attrs} />;
};

export default Image;
