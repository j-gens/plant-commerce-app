import { createSelector } from 'reselect';


const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
);

export const cartItemCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);
