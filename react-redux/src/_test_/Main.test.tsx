import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

z('renders Main component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});
