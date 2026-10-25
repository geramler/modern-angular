import { Component, input } from '@angular/core';
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

  // receive this object from parent
  // creates a required input signal
  readonly product = input.required<Product>();
  // optional input signal that defaults to this label when the parent doesn't provide one.
  // optional to the paret component to provide
  readonly addButtonLabel = input('Add to Cart');
}
