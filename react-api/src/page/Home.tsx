import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';
// import Search from '../components/Search/Search';
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
  const [value, setValue] = useState('');
  const [modalActive, setModalActive] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => setParam(data.products));
  }, [value]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.search.value;
    setValue(query);
  };

  return (
    <>
      <button onClick={() => setModalActive(true)}>модал</button>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <input type="submit" value="поиск" />
      </form>
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
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default Home;
