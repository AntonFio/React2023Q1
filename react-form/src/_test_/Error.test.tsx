import Error from '../page/Error';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Error', () => {
  test('render', () => {
    render(<Error />);
    const linkElement = screen.getByText(/error/i);
    expect(linkElement).toBeInTheDocument();
  });
});
