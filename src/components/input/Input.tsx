import React from 'react';
import classNames from 'classnames';

import './Input.css';

interface InputProps {
  id: string;
  className?: string;
  label?: string;
  error?: string;
}

const Input = ({
  id,
  className,
  label = '',
  error = '',
  ...attrs
}: InputProps & React.ComponentPropsWithoutRef<'input'>) => {
  const classes = classNames('input', className, { error });

  return (
    <div className='inputWrapper'>
      <div className='labelsWrapper'>
        {label && (
          <label className='inputLabel' htmlFor={id}>
            {label}
          </label>
        )}
        {attrs.required && <span className='inputRequired'>Required</span>}
      </div>
      <input name={id} id={id} className={classes} {...attrs} />
      {error && <span className='inputError'>{error}</span>}
    </div>
  );
};

export default Input;
