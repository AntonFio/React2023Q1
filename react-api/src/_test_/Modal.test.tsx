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
      param={[]}
    />
  );

  beforeEach(() => {
    render(
      <Modal
        cardId={0}
        param={[]}
        setActive={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });

  it('renders', () => {
    expect(screen.getByText(IParam.title)).toBeInTheDocument();
  });
});
