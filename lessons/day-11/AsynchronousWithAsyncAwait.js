/**
 * 1.Send request -> get response | Asynchronous
 * 2.Process the response | Asynchronous
 * 3.Validation the response | Asynchronous
 */

//Callback Hell
const url = 'URL ne';
main();

async function main() {
  const response = await sendRequest(url); // await nhất định phải đi với async
  const statusCode = await processResponse(response);
  validateResponse(statusCode); //async có thể ko cần await
  console.log('DONE!');
}

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


//NOTE: callback -> wrap into promise -> async/await syntax