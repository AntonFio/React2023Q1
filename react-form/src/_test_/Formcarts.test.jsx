import Formcarts from '../components/Formcarts';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Formcarts', () => {
  test('render', () => {
    render(<Formcarts />);
    const linkElement = screen.getByText(/Город/i);
    expect(linkElement).toBeInTheDocument();
  });
});
