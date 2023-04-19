import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import renderWithProviders from './renderProvider';

describe('App', () => {
  it('renders header and all routes', () => {
    const { queryByText } = renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(queryByText('Home')).toBeInTheDocument();
    expect(queryByText('About Us')).toBeInTheDocument();
    expect(queryByText('Form')).toBeInTheDocument();
  });
});
