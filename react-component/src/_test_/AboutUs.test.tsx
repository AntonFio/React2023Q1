import AboutUs from '../page/AboutUs';
import { describe } from 'vitest';
import { render } from '@testing-library/react';

describe('AboutUs', () => {
  test('it renders', () => {
    render(<AboutUs />);
  });
});
