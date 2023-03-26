/* eslint-disable @typescript-eslint/ban-types */
import './Form.css';
import React, { Component } from 'react';
import Cart from '../components/Formcarts';

interface Prop {
  valueName: string;
  valueDate: string;
  valueSelect: string;
  valueCheckbox: boolean;
  valueRadio: boolean;
  images?: Blob | MediaSource | null;
}

interface State {
  data: Prop[];
  isValidName: boolean;
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
    isValidName: true,
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
    const nameFullReg = /^(([a-zA-Z]|[а-яА-Я]){3,})*$/;
    if (!nameFullReg.test(this.inputName.current!.value) || this.inputName.current!.value === '') {
      this.setState({ isValidName: false });
      return false;
    } else {
      const data = {
        valueName: this.inputName.current!.value,
        valueDate: this.inputDate.current!.value,
        valueSelect: this.dateSelect.current!.value,
        valueCheckbox: this.checkbox.current!.checked,
        valueRadio: this.inputRadio.current!.checked,
        images: this.fileInputRef.current?.files && this.fileInputRef.current.files[0],
      };
      this.setState((prevState) => ({ data: [...prevState.data, data], isValidName: true }));
      console.log(this.inputRadio.current!.name);
      e.currentTarget.reset();
    }
    // const valueName = this.inputName.current?.value || '';
    // const valueDate = this.inputDate.current?.value || '';
    // const valueSelect = this.dateSelect.current?.value || '';
    // const valueCheckbox = this.checkbox.current?.checked;
    // const valueRadio = this.inputRadio.current?.checked;
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
    return (
      <>
        <form className="Form" onSubmit={this.handleSubmit}>
          <div>
            <span>Имя:</span>
            <input
              placeholder="мин 3 буквы"
              className={!this.state.isValidName ? 'error-input' : 'error-black'}
              type="text"
              name="inputName"
              ref={this.inputName}
              required
            />
            {!this.state.isValidName ? <p>error</p> : ''}
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
          <div style={{ display: 'flex' }}>
            <span>согласиться:</span>
            <input
              style={{ width: '4%', margin: '0px' }}
              type="checkbox"
              name="agree"
              ref={this.checkbox}
              required
            />
          </div>
          <div style={{ display: 'flex' }}>
            <label className="label-pol">
              <span>м:</span>
              <input
                style={{ width: '100%', marginTop: '5px' }}
                type="radio"
                name="pol"
                ref={this.inputRadio}
                required
              />
            </label>

            <label style={{ marginLeft: '10px' }} className="label-pol">
              <span>ж: </span>
              <input
                style={{ width: '100%', marginTop: '5px' }}
                type="radio"
                name="pol"
                ref={this.inputRadio}
                required
              />
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
