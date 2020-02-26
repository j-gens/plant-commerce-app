import CartActionTypes from './cart.types';


export const isHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
