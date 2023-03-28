import React from 'react';
import data from '../Сarts/data.json';
import '../Сarts/Cart.css';

interface Item {
  id: number;
  title: string;
  brand: string;
  price: number;
  images: string;
}

class Cart extends React.Component {
  render() {
    return (
      <div className="Carts">
        {data.map((item: Item) => (
          <div key={item.id}>
            <div className="Cart">
              <div>{item.brand}</div>
              <img src={item.images} alt="#" />
              <div>{item.title}</div>
              <div>{'$' + item.price}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
