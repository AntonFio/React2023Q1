import React, { useEffect, useRef, useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const valueRef = useRef(search);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearch(localStorage.getItem('search') || '');
    return () => {
      localStorage.setItem('search', valueRef.current);
    };
  }, []);

  useEffect(() => {
    valueRef.current = search;
  }, [search]);

  return <input type="search" value={search} onChange={onSearch} />;
};

export default Search;
