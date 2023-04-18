import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('renders header and all routes', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(queryByText('Home')).toBeInTheDocument();
    expect(queryByText('About Us')).toBeInTheDocument();
    expect(queryByText('Form')).toBeInTheDocument();
  });
});
