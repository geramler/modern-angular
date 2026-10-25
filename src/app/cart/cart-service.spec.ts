import { TestBed } from '@angular/core/testing';
import { CartService } from './cart-service';
import { Product } from '../products/product';

describe('CartService', () => {
  let service: CartService;

  const firstProduct: Product = {
    id: 1,
    name: 'First product',
    description: 'First product description',
    price: 10,
  };

  const secondProduct: Product = {
    id: 2,
    name: 'Second product',
    description: 'Second product description',
    price: 20,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('starts with zero items', () => {
    expect(service.totalItems()).toBe(0);
  });

  it('counts a newly added product', () => {
    service.addToCart(firstProduct);

    expect(service.totalItems()).toBe(1);
  });

  it('increments matching products and counts other products', () => {
    service.addToCart(firstProduct);
    service.addToCart(firstProduct);
    service.addToCart(secondProduct);

    expect(service.totalItems()).toBe(3);
  });
});