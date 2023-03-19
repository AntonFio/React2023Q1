import Headr from '../components/Header/Header';
import { describe } from 'vitest';
import { render } from '@testing-library/react';

describe('Test', () => {
  test('it renders', () => {
    render(<Headr />);
  });
});
