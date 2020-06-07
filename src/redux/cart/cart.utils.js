export const addItemToCart = (cartItems, newItem) => {
  const isExistingCartItem = cartItems.find((cartItem) => cartItem.id === newItem.id);

  if (isExistingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === newItem.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem);
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};


export const removeItemFromCart = (cartItems, removeItem) => {
  const isExistingCartItem = cartItems.find((cartItem) => cartItem.id === removeItem.id);

  if (isExistingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  }

  return cartItems.map((cartItem) => cartItem.id === removeItem.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem);
};
