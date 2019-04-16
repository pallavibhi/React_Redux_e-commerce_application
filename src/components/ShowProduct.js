import React from 'react';
import { connect } from "react-redux";
import ProductActions from '../actions/ProductActions';
import ProductThumbnail from './ProductThumbnail';

class ConnectedShowProduct extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(ProductActions());
  }

  render() {
    // if (this.props.products != undefined) {
    //   this.props.products.map(product => {
    //   })
    // }
    return (
      !this.props.products ?
        <h1> .... </h1> :
        <div>
          <br />
          <div className="container-fluid">
            <div className="row">
              {this.props.products.map((product, index) => {
                return (
                  <div key={index}>
                    <ProductThumbnail dispatch={this.props.dispatch} product={product} />
                  </div>
                )
              })
              }
            </div>

          </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

const ShowProduct = connect(mapStateToProps)(ConnectedShowProduct);

export default ShowProduct;
