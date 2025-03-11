const Request = require('./Request.js');
//Chill class/ Sub Class/Derived Class
class GetRequest extends Request {
  //class variable: được sinh ra trc khi Obj sinh ra
  static id = 1;

  constructor(url, method = 'GET') {
    super();
    this._url = url;
    super.setMethod();
  }

  setMethod() {
    super.setMethod('GET');
  }

  myNewMethod() {
    console.log('This is a new method');
  }

  doSomething() {
    //=> Ko thể Overriding
    console.log(GetRequest.id);
    console.log('This is a class method from the child class');
  }
}

let getRequest = new GetRequest();

getRequest.sendRequest();
getRequest.setMethod();
getRequest.verifyResponse();
getRequest.myNewMethod();
getRequest.doSomething();
