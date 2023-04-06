import React from 'react';
import '../Сarts/Cart.css';

interface Item {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  images: string;
  setActive: (arg0: boolean) => void;
  cardId: (arg0: number) => void;
}

const Cart = (props: Item) => {
  const handleCardClick = () => {
    props.cardId(props.id);
    props.setActive(true);
  };
  return (
    <>
      <div className="Cart" onClick={handleCardClick}>
        <div>{props.brand}</div>
        <div className="cart-img">
          <img src={props.images} alt="#" />
        </div>
        <div>{props.title}</div>
        <div>{'$' + props.price}</div>
        <div>{props.category}</div>
      </div>
    </>
  );
};

export default Cart;
