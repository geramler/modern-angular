export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  // Previous price, present when the product has a sale price.
  originalPrice?: number;
}
