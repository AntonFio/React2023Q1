import Modal from '../components/Modal/Modal';
import { render, screen } from '@testing-library/react';

test('Modal renders correctly', () => {
  const IParam = {
    id: 1,
    title: 'string',
    description: 'string',
    price: 1,
    discountPercentage: 1,
    rating: 1,
    stock: 1,
    brand: 'string',
    category: 'string',
    thumbnail: 'string',
  };

  render(
    <Modal
      setActive={function (): void {
        throw new Error('Function not implemented.');
      }}
      cardId={0}
      par={[]}
    />
  );

  beforeEach(() => {
    render(
      <Modal
        cardId={0}
        setActive={function (): void {
          throw new Error('Function not implemented.');
        }}
        par={[]}
      />
    );
  });

  it('renders', () => {
    expect(screen.getByText(IParam.title)).toBeInTheDocument();
  });
});
