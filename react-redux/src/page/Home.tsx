import React, { useState } from 'react';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading';
import Modal from '../components/Modal/Modal';
import Cart from '../components/Сarts/Cart';
import { useGetProductQuery } from '../store/reduser/api';

const Home: React.FC = () => {
  const [value, setValue] = useState(() => {
    const param = localStorage.getItem('param');
    return param || '';
  });
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number>(0);
  const [local, setLocal] = useState(() => {
    const param = localStorage.getItem('param');
    return param || '';
  });
  const { isLoading, data } = useGetProductQuery(value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.search.value;
    setValue(query);
    localStorage.setItem('param', query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLocal(event.target.value);
  };

  return (
    <>
      <Search onSubmit={handleSubmit} value={local} onChange={handleChange} />
      <div className="Carts">
        {!isLoading ? (
          data?.products.map((value, index) => {
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
      {modalActive && !isLoading && data?.products && (
        <Modal setActive={setModalActive} cardId={cardId} par={data?.products} />
      )}
    </>
  );
};

export default Home;
