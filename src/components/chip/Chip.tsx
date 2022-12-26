import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon';
import Image from '../image/Image';

import './Chip.css';

interface ChipProps {
  text: number | string;
  withImage?: boolean;
  withIcon?: boolean;
  withClose?: boolean;
  imageSrc?: string;
  imgAlt?: string;
  iconName?: string;
  className?: string;
  id?: number | string | null;
  onChipClick?: (id: number | string | null) => void;
  onCloseClick?: (e: React.MouseEvent, id: number | string | null) => void;
}

const Chip = ({
  text,
  withImage,
  withIcon,
  withClose,
  imageSrc,
  imgAlt,
  iconName = 'user-tie',
  className,
  onChipClick,
  onCloseClick,
  id = null,
}: ChipProps) => {
  const onChipClickAction = () => {
    if (onChipClick) {
      onChipClick(id);
    }
  };

  const onCloseClickAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCloseClick) {
      onCloseClick(e, id);
    }
  };

  const classes = classNames('chip', className);

  return (
    <div className={classes} onClick={onChipClickAction}>
      {withImage && (
        <span className='chipImage'>
          <Image src={imageSrc} alt={imgAlt} width={24} height={24} />
        </span>
      )}
      {withIcon && (
        <span className='chipIcon'>
          <Icon faNames={iconName} />
        </span>
      )}
      <span className='chipText'>{text}</span>
      {withClose && (
        <span className='chipClose' onClick={onCloseClickAction}>
          <Icon faNames='times' />
        </span>
      )}
    </div>
  );
};

export default Chip;
