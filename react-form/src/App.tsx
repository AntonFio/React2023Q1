/* eslint-disable @typescript-eslint/ban-types */
import './App.css';
import React, { Component } from 'react';

interface Prop {
  valueName: string;
  valueDate: string;
  valueSelect: string;
  valueCheckbox: boolean;
  valueRadio: boolean;
}

interface State {
  data: Prop[];
}

export default class App extends Component<{}, State> {
  state = {
    data: [] as {
      valueName: string;
      valueDate: string;
      valueSelect: string;
      valueCheckbox: boolean;
      valueRadio: boolean;
    }[],
  };

  inputName = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  dateSelect = React.createRef<HTMLSelectElement>();
  checkbox = React.createRef<HTMLInputElement>();
  inputRadio = React.createRef<HTMLInputElement>();

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const valueName = this.inputName.current?.value || '';
    // const valueDate = this.inputDate.current?.value || '';
    // const valueSelect = this.dateSelect.current?.value || '';
    // const valueCheckbox = this.checkbox.current?.checked;
    // const valueRadio = this.inputRadio.current?.checked;
    const data = {
      valueName: this.inputName.current!.value,
      valueDate: this.inputDate.current!.value,
      valueSelect: this.dateSelect.current!.value,
      valueCheckbox: this.checkbox.current!.checked,
      valueRadio: this.inputRadio.current!.checked,
    };
    this.setState((prevState) => ({ data: [...prevState.data, data] }));
  };

  handleClearButtonClick = () => {
    this.inputName.current!.value = '';
    this.inputDate.current!.value = '';
    this.dateSelect.current!.value = '';
    this.checkbox.current!.checked;
    this.inputRadio.current!.checked;
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="inputName" ref={this.inputName} required />
          </div>
          <div>
            <input type="date" name="inputDate" ref={this.inputDate} required />
          </div>
          <div>
            <select name="selectValue" ref={this.dateSelect} required>
              <option>Minsk</option>
              <option>Belarus</option>
              <option>Ucrain</option>
            </select>
          </div>
          <div>
            <input type="checkbox" name="agree" ref={this.checkbox} required />
          </div>
          <div>
            <input type="radio" name="radio" ref={this.inputRadio} required />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <h3>{item.valueName}</h3>
              <p>{item.valueDate}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
