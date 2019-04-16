import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ConnectedHeader = (cart) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">TiltKart</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <NavLink to='/showCart'>
              <span className="glyphicon glyphicon-shopping-cart"></span>
               &nbsp; Cart &nbsp;
              {cart.cart ?
                <span className="badge">{cart.cart.length}</span>
                : <span> </span>
              }
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cartItems
  }
}

let Header = connect(mapStateToProps)(ConnectedHeader)
export default Header;
