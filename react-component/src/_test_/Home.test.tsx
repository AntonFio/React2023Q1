import Home from '../page/Home';
import { describe } from 'vitest';
import { render } from '@testing-library/react';

describe('Home', () => {
  test('it renders', () => {
    render(<Home />);
  });
});
