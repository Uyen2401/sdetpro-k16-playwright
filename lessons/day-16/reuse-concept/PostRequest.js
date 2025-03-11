const Request = require('./Request.js');
//Chill class/ Sub Class/Derived Class
class PostRequest extends Request {

  //Overriding the parent class method
  setMethod() {
    super.setMethod('POST');
  }

  myNewMethod() {
    console.log('This is a new method');
  }
}

let postRequest = new PostRequest();

postRequest.sendRequest();
postRequest.setMethod();
postRequest.verifyResponse();
