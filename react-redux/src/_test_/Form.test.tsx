import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import Form from '../page/Form';
import renderWithProviders from './renderProvider';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';
describe('Form', () => {
  it('render', async () => {
    const { getByText, getByRole } = renderWithProviders(<Form />);
    const existButton = getByRole('button');
    expect(existButton).toBeInTheDocument();

    await act(async () => {
      const submitButton = getByRole('button');
      expect(submitButton).toBeInTheDocument();
    });

    const name = getByText(/Имя:/i);
    expect(name).toBeInTheDocument();
  });
  test('it should show error message when all the fields are not entered', async () => {
    renderWithProviders(<Form />);
    const buttonElement = screen.getByRole('button');
    await act(() => userEvent.click(buttonElement));
    const alertElement = screen.getByRole('warning');
    expect(alertElement).toBeInTheDocument();
  });
});
