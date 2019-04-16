import React from 'react';
import PropTypes from 'prop-types';
import AddToCartAction from '../actions/AddToCartAction';
import AppStore from '../store/AppStore';

const AddToCart = (product, dispatch) =>{
    dispatch(AddToCartAction(product));
}

const ProductThumbnail = (props) => {
   let source = './src/assets/images/product1.jpg';
  return (
      <div className="col-md-3 ">
        <div className="thumbnail productDiv">
            <img className="productImage" src={props.product.product_image} alt="Lights"/>
            <div className="caption">
              <h3>{props.product.product_name}</h3>
              <p>{props.product.product_description}</p>
              <p>{props.product.price}</p>
            </div>
            <button className="btn btn-success btn-xs pull-right" onClick={() => AddToCart(props.product, props.dispatch)}>Add To Cart</button>
        </div>
      </div>
  )
}

ProductThumbnail.propTypes = {
  props: PropTypes.any
};
export default ProductThumbnail;
