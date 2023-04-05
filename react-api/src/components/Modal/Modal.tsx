import React from 'react';
import './Modal.css';

interface ComponentProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}

const Modal: React.FC<ComponentProps> = ({ active, setActive }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
};

export default Modal;
