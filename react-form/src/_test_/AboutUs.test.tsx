import AboutUs from '../page/AboutUs';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('AboutUs', () => {
  test('render', () => {
    render(<AboutUs />);
    const linkElement = screen.getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
  });
});
