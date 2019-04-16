import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

const ConnectedCart = (cart) => {
  console.log(cart.cart);
  let totalBill = 0;
  let totalProducts = null;
  return (
    cart.cart.length > 0 ?
    <div className="cartDiv container-fluid">
      {
      cart.cart.map((cartItem,index) => {

        totalBill += Number(cartItem.price);
        totalProducts = cart.cart.length;
        return (
          <div key={index} className="cartRow row thumbnail">
            <div className="col-xs-3">
              <img className="cartImage" src={cartItem.product_image} alt="Lights"/>
            </div>
             <div className="col-xs-2">
                 <h4>{cartItem.product_name}</h4>
                 <p>{cartItem.product_description}</p>
             </div>
             <div className="col-xs-2">
                 <h3>{cartItem.price}</h3>
             </div>
          </div>
          )
      })}
        <div className="cartRow row thumbnail">
            <div className="col-xs-3">
                <h4>Total Products : {totalProducts}</h4>
            </div>
             <div className="col-xs-2">
                <h4>Total Bill : </h4>
             </div>
             <div className="col-xs-2">
                 <h4> {totalBill} </h4>
             </div>
             <div className="col-xs-2">
              <button className="btn btn-default">
               <NavLink to='/payment'>Proceed to Payment</NavLink>
              </ button>
             </div>
          </div>
      </div>
      : <span> Oops..! Your Cart is empty :( </span>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cartItems
  }
}

let Cart = connect(mapStateToProps)(ConnectedCart)
export default Cart;
