import { createSelector } from 'reselect';

export const productsSelector = (state) => state.products.items;

export const cartSelector = (state) => state.cart;
export const cartTotalCount = createSelector(
  cartSelector,
  (cart) => Object.values(cart || {}).reduce((a, b) => a + b, 0),
);
