import React from 'react';
import './Modal.css';
import { IParam } from '../../page/Home';

interface IProps {
  setActive: (arg0: boolean) => void;
  cardId: number;
  param: IParam[];
}

const Modal: React.FC<IProps> = ({ param, cardId, setActive }) => {
  return (
    <div className={'modal active'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {param.map((item) =>
          item.id === cardId ? (
            <div key={item.id} className="Cart">
              <div>{item.brand}</div>
              <div className="cart-img">
                <img src={item.images[0]} alt="#" />
              </div>
              <div>{item.title}</div>
              <div>{'$' + item.price}</div>
              <div>{item.category}</div>
            </div>
          ) : (
            ''
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
