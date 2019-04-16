import { ADD_TO_CART } from '../constants/action-types';

const addToCartSuccess = (cart) => (
  {
    type: ADD_TO_CART,
    cart
  });

function addToCart(product) {
  return (dispatch) => {
    dispatch(addToCartSuccess(product));
  }
}

export default addToCart;
