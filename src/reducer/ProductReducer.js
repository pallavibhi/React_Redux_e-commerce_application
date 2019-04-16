import { FETCH_PRODUCTS, ADD_PRODUCT, ADD_TO_CART } from '../constants/action-types';
import ProductAction from '../actions/ProductActions';

var initialState = {
  products: [],
  cartItems: []
}

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.products }
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.product] }
    case ADD_TO_CART:
      return {...state, cartItems : [...state.cartItems, action.cart]};
    default:
      return state;
  }
}

export default ProductReducer;
