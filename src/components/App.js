import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ShowProduct from './ShowProduct';
import Cart from './Cart';
import AddProduct from './AddProduct';
import Header from './Header';
import Payment from './Payment';

const App = () => {
  return (
    <div>
      <Router>
        <div className='container-fluid'>
          <Header />
          <Route exact path='/' component={ShowProduct} />
          <Route path='/showCart' component={Cart} />
          <Route path='/addProduct' component={AddProduct} />
          <Route path='/payment' component={Payment} />
        </div>
      </Router>
    </div>
  );
};

App.propTypes = {
  props: PropTypes.any
};

export default App;
