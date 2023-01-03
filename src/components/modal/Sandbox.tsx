import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../button/Button';

const Sandbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const handleSubmit = () => {
    console.log('Submit function!');
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log('Cancel function!');
    setIsOpen(false);
  };

  return (
    <>
      <h2>
        <span>1. Base Dialog (Modal) window:</span>
      </h2>
      <Button onClick={openModal}>Show modal</Button>
      <Modal
        title='Test Dialog window'
        isOpen={isOpen}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a
        </p>
      </Modal>
    </>
  );
};

export default Sandbox;
