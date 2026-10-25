import { computed, Injectable, signal } from "@angular/core";
import { Product } from "../products/product";
import { CartItem } from "./cart-item";

@Injectable({
    providedIn: 'root'
})

export class CartService {

    private readonly cartItems = signal<CartItem[]>([]);

    readonly items = this.cartItems.asReadonly();

    readonly totalItems = computed(() =>
        this.cartItems().reduce((total, item) => total + item.quantity, 0)
    );

    readonly subtotal = computed(() =>
        this.cartItems().reduce((total, item) => total + item.product.price * item.quantity, 0)
    );

    addToCart(product: Product) {
        this.cartItems.update((items) => {
            const existingItem = items.find((item) => item.product.id === product.id);

            if (existingItem) {
                // Increment the matching product and leave all other items unchanged.
                return items.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...items, { product, quantity: 1 }];
        });
    }

    decreaseQuantity(productId: number): void {
        this.cartItems.update((items) => {
            const existingItem = items.find((item) => item.product.id === productId);

            if (!existingItem) return items;
            if (existingItem.quantity === 1) {
                return items.filter((item) => item.product.id !== productId);
            }

            return items.map((item) =>
                item.product.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        });
    }

    removeFromCart(productId: number): void {
        this.cartItems.update((items) =>
            items.filter((item) => item.product.id !== productId)
        );
    }
}