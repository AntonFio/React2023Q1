import React from 'react';

interface ISearch {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Search: React.FC<ISearch> = ({ onSubmit }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <input type="search" name="search" />
      <input type="submit" value="поиск" />
    </form>
  );
};

export default Search;
