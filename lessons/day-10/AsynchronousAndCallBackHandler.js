/**
 * 1. Send request -> get response | Asynchronous
 * 2 Process the response | Asynchronous
 * 3.Validation the response | Asynchronous
 */

//Callback Hell
const url = "URL ne";
sendRequest(url, function (response) {
  processResponse(response, function (statusCode) {
    validateResponse(statusCode); 
    console.log("Done");
  });
});

//Mimic Asynchronous
function sendRequest(url, callbackFn) {
  console.log(`1. Send request to the endpoint ${url}....`);
  setTimeout(function () {
    callbackFn({ status: 200 });
  }, 2 * 1000);
}

//Mimic Asynchronous
function processResponse(response, callbackFn) {
  console.log(`2 Process the response.....`);
  setTimeout(function () {
    callbackFn(response.status);
  }, 3 * 1000);
}

//Mimic Asynchronous
function validateResponse(responseStatus) {
  console.log(`3.Validation the response.....`);
  if (responseStatus === 200) {
    console.log("PASSED!");
  } else {
    console.error("FAILED!");
  }
}