import React from 'react';
import productApi from "../api/productApi";
class Payment extends React.Component{
  constructor(){
    super();
  }
  handleSubmit(e){
    e.preventDefault();
    let user_details={
        user_name : this.user_name.value,
        email_id : this.email_id.value,
        mobile : this.mobile.value,
        billing_addr : this.billing_addr.value
    }
    productApi.sendMail(user_details);
  }

  render() {
    return(
      <div className="container-fluid" id="productFrom">
      <div className="row-fluid" >
        <h2>Enter Your Details</h2>
        <hr />
        <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} method="post">
          <fieldset>
          <div className="form-group row ">
              <div className="col-xs-1">
              </div>
              <div className="input-group  col-xs-10 input-text">
                <input type="text" placeholder="Enter Your Name" className="form-control" ref={(user_name) => this.user_name = user_name} />
              </div>
            </div>
            <div className="form-group row ">
              <div className="col-xs-1">
              </div>
              <div className="input-group  col-xs-10 input-text">
                <input type="email" placeholder="Your email-id" className="form-control" ref={(email_id) => this.email_id = email_id} />
              </div>
            </div>
            <div className="form-group row ">
              <div className="col-xs-1">
              </div>
              <div className="input-group  col-xs-10 input-text">
                <input type="text" placeholder="Mobile No." className="form-control" ref={(mobile) => this.mobile = mobile} />
              </div>
            </div>
            <div className="form-group row ">
              <div className="col-xs-1">
              </div>
              <div className="input-group  col-xs-10 input-text">
                <textarea placeholder="Billing Address" className="form-control" ref={(billing_addr) => this.billing_addr = billing_addr} />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xs-12">
                <button type="submit" className="btn btn-md btn-info pull-right edit-btn">Submit Deatils</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    );
  }
};

export default Payment;
