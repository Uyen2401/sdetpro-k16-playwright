console.log("1. Chay toi nha thang Teo");
setTimeout(callbackFunction.bind(undefined,"Teo"), 1 * 1000);
console.log('3.Chay toi quan cafe');

function callbackFunction(name){
    console.log(`2.${name} oi, uong cafe khong?`)
}
