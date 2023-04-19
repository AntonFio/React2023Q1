import Home from '../page/Home';
import { describe } from 'vitest';
import renderWithProviders from './renderProvider';

describe('Header', () => {
  it('render', async () => {
    const { getByText } = renderWithProviders(<Home />);
    const submit = getByText(/поиск/i);
    expect(submit).toBeInTheDocument();
  });
});
