import Error from '../page/Error';
import { describe } from 'vitest';
import { render } from '@testing-library/react';

describe('Error', () => {
  test('it renders', () => {
    render(<Error />);
  });
});
