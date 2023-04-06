import React from 'react';
import './Modal.css';

interface IProps {
  setActive: (arg0: boolean) => void;
}

const Modal: React.FC<IProps> = ({ setActive }) => {
  return (
    <div className={'modal active'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
};

export default Modal;
