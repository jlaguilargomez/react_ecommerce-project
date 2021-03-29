import { createSelector } from 'reselect';

// 2 tipos de selectores que podemos crear: Input / Alpha
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce((acc, cartItem) => (acc += cartItem.quantity), 0));
