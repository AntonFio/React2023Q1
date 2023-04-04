// import React, { useEffect, useRef, useState } from 'react';

// interface IParam {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: Array<string>;
// }

// const Search = () => {
//   const [search, setSearch] = useState('');
//   const [param, setParam] = useState<Array<IParam>>([]);

//   const query = '';
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const query = form.search.value;
//     setParam(param);
//   };

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/search?q=${query}`)
//       .then((res) => res.json())
//       .then((data) => setParam(data.products));
//   }, [search]);

//   return (
//     <>
//       <form autoComplete="off" onSubmit={handleSubmit}>
//         <input type="search" name="search" />
//         <input type="submit" value="поиск" />
//       </form>
//     </>
//   );
// };

// export default Search;

// import React, { useEffect, useRef, useState } from 'react';

// const Search = () => {
//   const [search, setSearch] = useState('');
//   const valueRef = useRef(search);

//   const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//   };

//   useEffect(() => {
//     setSearch(localStorage.getItem('search') || '');
//     return () => {
//       localStorage.setItem('search', valueRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     valueRef.current = search;
//   }, [search]);

//   return <input type="search" value={search} onChange={onSearch} />;
// };

// export default Search;
