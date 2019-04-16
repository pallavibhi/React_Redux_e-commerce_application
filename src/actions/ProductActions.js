import { FETCH_PRODUCTS, ADD_PRODUCT } from '../constants/action-types';
import productApi  from '../api/productApi';

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS,
  products
});


function fetchProducts(){
  return (dispatch) => {
    productApi.fetchProduct()
      .then(res => {
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch(err => {
        throw(err);
      })
  }
}

export default fetchProducts;
