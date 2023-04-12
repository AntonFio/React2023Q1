import Cart from '../components/Сarts/Cart';
import { describe } from 'vitest';
import { render } from '@testing-library/react';

describe('Cart', () => {
  it('Cart', async () => {
    const { getByText } = render(
      <Cart
        id={0}
        title={'title'}
        brand={'brand'}
        category={'category'}
        price={0}
        images={''}
        setActive={(): void => {
          throw new Error('Function not implemented.');
        }}
        cardId={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    const title = getByText(/title/i);
    expect(title).toBeInTheDocument();
    const brand = getByText(/brand/i);
    expect(brand).toBeInTheDocument();
    const category = getByText(/category/i);
    expect(category).toBeInTheDocument();
  });
});
