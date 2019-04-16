import React from 'react';
import addProducts from '../actions/AddProductAction';
import { connect } from 'react-redux';

export class AddProductConnected extends React.Component {
  constructor() {
    super();
  }
  addProduct(e) {
    e.preventDefault();
    console.log('In Add Product');

    var reader = new FileReader();
    let file = this.product_image.files[0];
    let imageURI;
    console.log('//////' + file.name);

    reader.onload = (upload) => {
      console.log('In Onload---');
      imageURI =  upload.target.result;
      console.log(upload.target.result);
       let product = {
        product_name: this.product_name.value,
        product_image: imageURI,
        product_description: this.product_description.value,
        price:this.price.value
      }
      this.props.add_product(product);
    }

    reader.readAsDataURL(file);


    // let product = {
    //   product_name: this.product_name.value,
    //   product_image: file,
    //   product_description: this.product_description.value,
    //   price: this.price.value
    // }
    // this.props.add_product(product);

    // console.log(imageURI);
    // if(imageURI){
    //   console.log('in ImageURL true...');
    //   let product = {
    //     product_name: this.product_name.value,
    //     product_image: imageURI,
    //     product_description: this.product_description.value,
    //     price:this.price.value
    //   }
    //   this.props.add_product(product);
    // }
  }
  render() {
    return (
      <div className="container-fluid" id="productFrom">
        <div className="row-fluid" >
          <h2>Add Product Details</h2>
          <hr />
          <form className="form-horizontal" encType="multipart/form-data" onSubmit={this.addProduct.bind(this)} method="post">
            <fieldset>
              <div className="form-group row ">
                <div className="col-xs-1">
                </div>
                <div className="input-group  col-xs-10 input-text">
                  <input type="text" placeholder="Product Name" className="form-control" ref={(product_name) => this.product_name = product_name} />
                </div>
              </div>
              <div className="form-group row ">
                <div className="col-xs-1">
                </div>
                <div className="input-group  col-xs-10 input-text">
                  <input type="text" placeholder=" Product Description" className="form-control" ref={(product_description) => this.product_description = product_description} />
                </div>
              </div>
              <div className="form-group row ">
                <div className="col-xs-1">
                </div>
                <div className="input-group  col-xs-10 input-text">
                  <input type="text" placeholder="Price" className="form-control" ref={(price) => this.price = price} />
                </div>
              </div>
              <div className="form-group row ">
                <div className="col-xs-1">
                </div>
                <div className="input-group  col-xs-10 input-text">
                  {/* <input type="file"  className="form-control" type="text" ref={(scenarioName) => this.scenarioName = scenarioName} /> */}
                  <label htmlFor="exampleInputFile">Choose Product Image:</label>
                  <input type="file" name="imgUploader" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" ref={(product_image) => this.product_image = product_image} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-xs-12">
                  <button type="submit" className="btn btn-md btn-info pull-right edit-btn">Add</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    add_product: product => dispatch(addProducts(product))
  };
};

const AddProduct = connect(null, mapDispatchToProps)(AddProductConnected);

export default AddProduct;
