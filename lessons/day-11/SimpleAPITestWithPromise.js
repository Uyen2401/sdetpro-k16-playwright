/**
 * ****************************
 * https://jsonplaceholder.typicode.com/todos/1
 * ****************************
 * IDEA:
 * fetch(): Method có sẵn của Nodejs là Asynchronous -> Return: Promise
 * then-- syntax chi nhan vao dinh nghia cua 1 function, neu co () thi bao he thong thuc thi luon, khong phai dinh nghia ham (function definition)
 * fetch(TODO1_ENDPOINT)
 *    .then(getResponse)
 *    .then(validateResponse)
 *
 * DETAIL IMPLEMENT
 *  function getResponse(rawResponse){
 *      return rawResponse.json();
 * }
 *
 *  function validateResponse(todo){
 *   if(todo.completed){
 *      console.log('Completed')
 *   }else{
 *     console.log('In Progress')
 *   }
 * }
 */

const TODO1_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

console.log(fetch(TODO1_ENDPOINT));
fetch(TODO1_ENDPOINT)
  .then(getResponse)
  .then(function () {
    console.log(todo);
    if (todo.completed) {
      console.log('Completed!');
    } else {
      console.log('In Progress!');
    }
    console.log('DONE Testing');
    console.log('Next step');
    console.log('Other step');
    // anotherPromise().then(callbackFn) -> Async/wait giup giai quyet duoc van de nay. Xử lý lỗi đơn giản hơn Promise
  });

function getResponse(rawResponse) {
  return rawResponse.json();
}

function validateResponse(todo) {
  console.log(todo);
  if (todo.completed) {
    console.log('Completed!');
  } else {
    console.log('In Progress!');
  }
}
