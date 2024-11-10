import { createSelector } from "reselect";

// Extract the cart items array
const getCartItems = (state) => state.cart.cart;

export const getTotalQuantity = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.quantity, 0),
);

export const getTotalPrice = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.totalPrice, 0),
);

// Return the cart items array without using createSelector
export const getCart = getCartItems;

export const getCurrentQuantityById = (id) =>
  createSelector(
    [getCartItems],
    (cartItems) => cartItems.find((item) => item.pizzaId === id)?.quantity ?? 0,
  );
