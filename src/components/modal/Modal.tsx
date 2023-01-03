import React from 'react';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';

import './Modal.css';

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  children: JSX.Element | string;
}

// Modal.defaultProps = {
//   title: 'Modal title',
//   isOpen: false,
//   onCancel: () => {},
//   onSubmit: () => {},
//   children: null,
// };

const Modal = ({ title, isOpen, onCancel, onSubmit, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className='modalOverlay'>
            <div className='modalWindow'>
              <div className='modalHeader'>
                <div className='modalTitle'>{title}</div>
                <Icon faNames='times' onClick={onCancel} />
              </div>
              <div className='modalBody'>{children}</div>
              <div className='modalFooter'>
                <Button onClick={onCancel} invert>
                  Cancel
                </Button>
                <Button onClick={onSubmit}>Submit</Button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
