import React from 'react';
import Search from '../components/Search/Search';
import Cart from '../components/Сarts/Cart';

class Home extends React.Component {
  render() {
    return (
      <>
        <Search />
        <h2>Home</h2>
        <Cart />
      </>
    );
  }
}

export default Home;
