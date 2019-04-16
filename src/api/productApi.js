import axios from 'axios';


class ProductApi {
  constructor(){
    this.serverURL = 'http://localhost:3001';
  }

  fetchProduct(){
    return axios.get(this.serverURL+'/fetchProducts');
  }
  addProduct(product){
    return axios.post(this.serverURL+'/addProducts',{product});
  }
  sendMail(user_details){
    return axios.post(this.serverURL+'/sendMail',{user_details});
  }
}

let ProductApiObj = new ProductApi();
export default ProductApiObj;

