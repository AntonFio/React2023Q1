/* eslint-disable @typescript-eslint/ban-types */
import './App.css';
import React, { Component } from 'react';
import Cart from './components/Cart';

interface Prop {
  valueName: string;
  valueDate: string;
  valueSelect: string;
  valueCheckbox: boolean;
  valueRadio: boolean;
  images?: Blob | MediaSource | null;
}

// interface Val {
//   images: File | null;
// }

interface State {
  data: Prop[];
  // img: Val[];
}

export default class App extends Component<{}, State> {
  state = {
    data: [] as {
      valueName: string;
      valueDate: string;
      valueSelect: string;
      valueCheckbox: boolean;
      valueRadio: boolean;
      images: Blob | MediaSource;
    }[],
  };

  inputName = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  dateSelect = React.createRef<HTMLSelectElement>();
  checkbox = React.createRef<HTMLInputElement>();
  inputRadio = React.createRef<HTMLInputElement>();
  inputFile = React.createRef<HTMLInputElement>();
  fileInputRef = React.createRef<HTMLInputElement>();

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
      images: this.fileInputRef.current?.files && this.fileInputRef.current.files[0],
    };
    this.setState((prevState) => ({ data: [...prevState.data, data] }));

    e.currentTarget.reset();
  };

  // handleClearButtonClick = () => {
  //   this.inputName.current!.value = '';
  //   this.inputDate.current!.value = '';
  //   this.dateSelect.current!.value = '';
  //   this.checkbox.current!.checked;
  //   this.inputRadio.current!.checked;
  // };

  render() {
    const { data } = this.state;

    const nameFullReg = /^(([a-zA-Z]|[а-яА-Я]){3,})*$/;
    let a: JSX.Element | string = '';

    this.state.data.map((item) => {
      if (!nameFullReg.test(item.valueName)) {
        a = <p>errror</p>;
      } else {
        a = '';
      }
    });
    return (
      <>
        <form className="Form" onSubmit={this.handleSubmit}>
          <div>
            <span>Имя:</span>
            <input type="text" name="inputName" ref={this.inputName} required />
            {a}
          </div>
          <div>
            <span>Дата:</span>
            <input type="date" name="inputDate" ref={this.inputDate} required />
          </div>
          <div>
            <span>Город:</span>
            <select className="Selrct-form" name="selectValue" ref={this.dateSelect} required>
              <option>Minsk</option>
              <option>Russia</option>
              <option>Ukraine</option>
            </select>
          </div>
          <div>
            <input type="checkbox" name="agree" ref={this.checkbox} required />
          </div>
          <div>
            <label className="label-pol">
              м: <input type="radio" name="pol" ref={this.inputRadio} required />
            </label>

            <label className="label-pol">
              ж:
              <input type="radio" name="pol" ref={this.inputRadio} required />
            </label>
          </div>
          <div>
            <input type="file" accept="image/*" ref={this.fileInputRef} />
          </div>
          <div>
            <input className="Btn-form" type="submit" value="Submit" />
          </div>
        </form>

        {data.map((item, index) => (
          <Cart
            key={index}
            name={item.valueName}
            date={item.valueDate}
            img={URL.createObjectURL(item.images)}
            city={item.valueSelect}
          />
        ))}
      </>
    );
  }
}
