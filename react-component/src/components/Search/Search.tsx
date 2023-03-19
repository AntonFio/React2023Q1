import React from 'react';

type State = {
  valueInput?: undefined | string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { valueInput: '' };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ valueInput: e.target.value });
    console.log(this.state.valueInput);
  };

  componentDidMount() {
    const local = localStorage.getItem('search');
    local ? this.setState({ valueInput: local }) : localStorage.setItem('search', '');
  }

  componentWillUnmount() {
    const valueInput = this.state.valueInput ? this.state.valueInput : ' ';
    localStorage.setItem('search', valueInput);
  }

  render() {
    return <input type="search" value={this.state.valueInput} onChange={this.handleChange} />;
  }
}

export default Search;
