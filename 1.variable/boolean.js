let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓); // " "를 쓰지 않고도 true false로 인식함 


let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);


console.clear();

//Falshy 거짓인 값
 

//!! 는 boolean 연산자로 바꿔줌. 
console.log(!!0); 
console.log(!!-0);
console.log(!!'');
console.log(!!undefined);
console.log(!!NaN);


//Truthy 참인 값

console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{}); // object 자체가 있으므로 트루가 됨. 
console.log(!!Infinity);