/**
 * 1.Send request -> get response | Asynchronous
 * 2.Process the response | Asynchronous
 * 3.Validation the response | Asynchronous
 */

const url = 'URL ne';

// Thenable chain
sendRequest(url)
  .then(function (response) {
    return processResponse(response);
  })
  .then(function (statusCode) {
    validateResponse(statusCode);
  });

//Mimic Asynchronous
function sendRequest(url) {
  console.log(`1. Send request to the endpoint ${url}....`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ status: 200 });
    }, 2 * 1000);
  });
}

//Mimic Asynchronous
function processResponse(response) {
  console.log(`2 Process the response.....`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(response.status);
    }, 3 * 1000);
  });
}

//Mimic Asynchronous
function validateResponse(responseStatus) {
  console.log(`3.Validation the response.....`);
  if (responseStatus === 200) {
    console.log('PASSED!');
  } else {
    console.error('FAILED!');
  }
}
