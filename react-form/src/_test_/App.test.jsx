import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('render', () => {
    render(<App />);
    const linkElement = screen.getByText(/Имя:/i);
    expect(linkElement).toBeInTheDocument();
  });
});
