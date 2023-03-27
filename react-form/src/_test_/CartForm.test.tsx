import { render, screen } from '@testing-library/react';
import CartForm from '../components/CartForm';

test('render', () => {
  render(<CartForm name={''} date={''} img={''} city={''} />);
  const linkElement = screen.getByText(/Город:/i);
  expect(linkElement).toBeInTheDocument();
});
