import Home from '../page/Home';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  test('render', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });
});
