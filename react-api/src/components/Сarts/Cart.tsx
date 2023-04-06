import React from 'react';
import '../Сarts/Cart.css';

interface Item {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  images: string;
  onClick: () => void;
}

const Cart = (props: Item) => {
  return (
    <>
      <div className="Cart" {...props.onClick}>
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
