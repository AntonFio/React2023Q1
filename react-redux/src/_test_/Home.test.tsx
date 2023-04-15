import Home from '../page/Home';
import { describe } from 'vitest';
import { render } from '@testing-library/react';

describe('Header', () => {
  it('render', async () => {
    const { getByText } = render(<Home />);
    const submit = getByText(/поиск/i);
    expect(submit).toBeInTheDocument();
  });
});
