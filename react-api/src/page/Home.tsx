import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';
import Modal from '../components/Modal/Modal';
// import Search from '../components/Search/Search';
import Cart from '../components/Сarts/Cart';

export interface IParam {
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
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(async () => {
        const result = await fetch(`https://dummyjson.com/products/search?q=${value}`);
        const data = await result.json();
        setParam(data.products);
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, [value]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.search.value;
    setValue(query);
  };

  return (
    <>
      {/* <button onClick={() => setModalActive(true)}>модал</button> */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <input type="submit" value="поиск" />
      </form>
      <div className="Carts">
        {!loading ? (
          param.map((value, index) => {
            return (
              <Cart
                setActive={setModalActive}
                key={index}
                title={value.title}
                brand={value.brand}
                price={value.price}
                images={value.images[0]}
                id={value.id}
                category={value.category}
                cardId={setCardId}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      {modalActive && <Modal setActive={setModalActive} cardId={cardId} param={param} />}
    </>
  );
};

export default Home;
