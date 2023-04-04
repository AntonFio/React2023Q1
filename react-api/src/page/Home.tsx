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
  images: [];
}

const Home: React.FC = () => {
  const [param, setParam] = useState<IParam[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setParam(data));
  }, []);

  return (
    <>
      <Search />
      <h2>
        {/* {param.map((item) => {
          <p key={item.id}>{item.title}</p>;
        })} */}
      </h2>
      <Cart />
    </>
  );
}

export default Home;
