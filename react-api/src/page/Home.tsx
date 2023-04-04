import React, { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import Cart from '../components/Сarts/Cart';

interface IParam {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

const Home: React.FC = () => {
  const [param, setParam] = useState<Array<IParam>>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setParam(data.products));
  }, []);

  return (
    <>
      <Search />
      <div className="Carts">
        {param.map((value, index) => {
          return (
            <Cart
              key={index}
              title={value.title}
              brand={value.brand}
              price={value.price}
              images={value.images[0]}
              id={value.id}
              category={value.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
