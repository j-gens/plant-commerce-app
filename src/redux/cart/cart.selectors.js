import { createSelector } from 'reselect';


const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItems,
);

export const hiddenCartSelector = createSelector(
  [cartSelector],
  (cart) => cart.isHidden,
);

export const cartItemCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0),
);

export const cartTotalCostSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
);
