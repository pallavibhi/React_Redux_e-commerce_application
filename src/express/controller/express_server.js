const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const mailer = require('express-mailer');
const Nexmo = require('nexmo');
let products = require('../model/ProductModel');


const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/*mailer.extend(app, {
  from: 'bhiwarepallavi19@gmail.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: false, // use SSL
  port: 587, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'bhiwarepallavi19@gmail.com',
    pass: '9552869621'
  }
});*/

var nexmo = new Nexmo({
  apiKey: '1251b986 ',
  apiSecret: '75bc9d88b9335cb4',
});

app.get('/fetchProducts', function (req, res) {
  console.log(products);
  res.send(products);
})

app.post('/addProducts', function (req, res) {
  let product = req.body.product;
  let latestProductId = getLatestProductId();
  var data = product.product_image.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  var image = fs.writeFile('../../assets/productImages/product'+latestProductId+'.jpg', buf, function (err) {
    if (err) {
      console.log("There was an error writing the image")
    }
    else {
      console.log("There file was written")
        let newProduct = {
          product_id:latestProductId,
          product_name:product.product_name,
          product_image:'./src/assets/productImages/product'+latestProductId+'.jpg',
          product_description:product.product_description,
          price:product.price
        }
        products.push(newProduct);
        console.log(products);
        res.send("Product Added Successfully!!!");
    }

  });
})

app.post('/sendMail', function (req, res) {
  let user_details = req.body.user_details;
  console.log(user_details);
  /*app.mailer.send('email', {
    to: user_details.email_id, // REQUIRED. This can be a comma delimited string just like a normal email to field.
    subject: 'Product Bill', // REQUIRED.
    otherProperty: 'Your Order Placed Successfully!!!' // All additional properties are also passed to the template as local variables.
  }, function (err) {
    if (err) {
      // handle error
      console.log('**********');
      console.log(err);
      res.send('There was an error sending the email');
      return;
    }
    console.log('Mail sent!!!')
    res.send('Email Sent');
});*/

// let text = {
//   // To Number is the number you will be sending the text to.
//   toNumber: user_details.mobile,
//   // From number is the number you will buy from your admin dashboard
//   fromNumber: '+918668844023',
//   // Text Content
//   smsBody: 'Order Placed Successfully!!!',
//   //Sign up for an account to get an API Token
//   apiToken: 'testaccount'
// };

// puretext.send(text, function (err, response) {
//   if(err) {
//     console.log('***********');
//     console.log(err);
//   }
//   else {
//     console.log('-------');
//     console.log(response)
//   }

nexmo.message.sendSms("NEXMO", '+917385158197', 'Order Placed Successfully!!');
})



function getLatestProductId(){
    return products.length + 1;
}

const server = http.createServer(app);
server.listen(3001, function () {
  console.log('Server running on port 3000!!');
});

