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
}

const Cart = (props: Item) => {
  return (
    <>
      <div className="Cart" onClick={() => props.setActive(true)}>
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
