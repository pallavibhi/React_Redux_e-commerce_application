import React from 'react';
import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './components/App.js';
import './styles/stylesheets/main.css';
import {Provider} from 'react-redux';
import store from './store/AppStore';


ReactDOM.render(
 <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('app')
);
