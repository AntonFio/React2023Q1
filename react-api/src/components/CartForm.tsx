import '../components/CartForm.css';

type Props = {
  name: string;
  date: string;
  img: string;
  city: string;
};

const CartForm = (props: Props) => {
  return (
    <div className="cart-wrapper">
      <img className="img-cart" src={props.img} alt="#" />
      <p>
        <span>Имя:</span> {props.name}
      </p>
      <p>
        <span>Дата:</span> {props.date}
      </p>
      <p>
        <span>Город:</span> {props.city}
      </p>
    </div>
  );
};

export default CartForm;
