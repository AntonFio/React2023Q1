import { act } from 'react-dom/test-utils';
import Form from '../page/Form';
import renderWithProviders from './renderProvider';

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
});
