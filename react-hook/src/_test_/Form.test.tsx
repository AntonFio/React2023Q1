import { render, screen } from '@testing-library/react';
import Form from '../page/Form';

describe('Form', () => {
  test('render', () => {
    render(<Form />);
    const linkElement = screen.getByText(/Имя:/i);
    expect(linkElement).toBeInTheDocument();
  });
});
