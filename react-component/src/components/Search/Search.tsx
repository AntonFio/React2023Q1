import React from 'react';

type State = {
  value?: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ value: (event.target as HTMLInputElement).value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const val: string | undefined = this.state.value;
    console.log(val);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="search" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Sesrch" />
      </form>
    );
  }
}

export default Search;
