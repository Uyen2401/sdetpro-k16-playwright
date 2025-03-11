//Parent Class
class Request {
  
  constructor(url, header = {}) {
    this.url = url;
    this.headers = header;
    this.method = '';
  }

  setMethod(method) {
    this.headers = { ...this.headers, method: method };
  }

  sendRequest() {
    console.log(`Sending request with the headers: ${JSON.stringify(this.headers)}`);
  }

  verifyResponse() {
    console.log('Verifying response.....');
  }

  static doSomething() {
    //=> Ko thể Overriding
    console.log('This is a class method');
  }
}

module.exports = Request;
