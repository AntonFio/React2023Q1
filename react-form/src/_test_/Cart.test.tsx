import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

test('render', () => {
  render(<Cart name={''} date={''} img={''} city={''} />);
  const linkElement = screen.getByText(/Город:/i);
  expect(linkElement).toBeInTheDocument();
});
