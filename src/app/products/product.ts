export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  // optional property
  // this field only apply to products on sale
  originalPrice?: number;
}
