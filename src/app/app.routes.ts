import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'products',
	},
	{
		path: 'products',
		loadComponent: () =>
			import('./products/products-grid/products-grid').then((module) => module.ProductsGrid),
	},
	{
		path: 'cart',
		loadComponent: () =>
			import('./cart/cart-page/cart-page').then((module) => module.CartPage),
	},
	{
		path: '**',
		redirectTo: 'products',
	},
];
