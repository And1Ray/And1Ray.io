let x = 5;
console.log( x++ );// равно 5ти

var a = [] + false - null + true;
console.log(a);//NaN

let y = 1;
let c = y = 2;
console.log(c);//2

console.log([] + 1 + 2);//12

console.log( "1"[0] );//1

console.log(2 && 1 && null && 0 && undefined);//null

console.log(!!(a && b) == (a && b));//false есть разница

console.log(null || 2 && 3 || 4);//3

var a = [1, 2, 3], b = [1, 2, 3];
console.log(a == b);//false

console.log( +"Infinity" );//Infinity

console.log("ёжик" > "яблоко");//true

console.log(0 || "" || 2 || undefined || true || falsе);//2