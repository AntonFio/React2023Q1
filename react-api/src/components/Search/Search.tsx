import React from 'react';

interface ISearch {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Search = (props: ISearch) => {
  return (
    <form style={{ margin: '0 0 10px 0' }} autoComplete="off" onSubmit={props.onSubmit}>
      <input type="search" name="search" value={props.value} onChange={props.onChange} />
      <input type="submit" value="поиск" />
    </form>
  );
};

export default Search;
