/* eslint-disable @typescript-eslint/ban-types */
import React, { Component } from 'react';
import '../components/Formcarts.css';

type Props = {
  name: string;
  date: string;
  img: string;
  city: string;
};

type State = {};

export default class Formcarts extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cart-wrapper">
        <img className="img-cart" src={this.props.img} alt="#" />
        <p>
          <span>Имя:</span> {this.props.name}
        </p>
        <p>
          <span>Дата:</span> {this.props.date}
        </p>
        <p>
          <span>Город:</span> {this.props.city}
        </p>
      </div>
    );
  }
}
