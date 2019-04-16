import { FETCH_PRODUCTS, ADD_PRODUCT } from '../constants/action-types';
import productApi  from '../api/productApi';

const addProductsSuccess = (product) => ({
  type: ADD_PRODUCT,
  product
});


function addProducts(product){
  console.log('In Add Product Action')
  return (dispatch) => {
    productApi.addProduct(product)
      .then(res => {
        dispatch(addProductsSuccess(product));
      })
      .catch(err => {
        throw(err);
      })
  }
}

export default addProducts;
