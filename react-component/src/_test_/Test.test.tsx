import Test from '../page/Test';
import { describe } from 'vitest';
import { render } from '@testing-library/react';

describe('Test', () => {
  test('it renders', () => {
    render(<Test />);
  });
});
