import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  // Required input supplied by the parent and exposed to the template.
  readonly product = input.required<Product>();
  // The parent can override this label; otherwise it defaults to 'Add to Cart'.
  readonly addButtonLabel = input('Add to Cart');

  // Notify the parent when this product is added to the cart.
  readonly addToCart = output<Product>();

  protected onAddToCart() {
    this.addToCart.emit(this.product());
  }
}
