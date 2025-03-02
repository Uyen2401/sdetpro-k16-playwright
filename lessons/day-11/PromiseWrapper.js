console.log('1.Chay toi nha thang Teo');
// console.log(waitForResponse());
waitForResponse().then(goToTheCoffeeShop);

function goToTheCoffeeShop(){
    console.log('3.Chay toi quan cafe')
}
// Wrap an asynchronous function to a promise
function waitForResponse() {
  return new Promise(wrapper);
}
function wrapper(resolve, reject) {
  setTimeout(function () {
    console.log('2.Teo oi, uong cafe khong?');
    resolve();
  }, 3 * 1000);
}
