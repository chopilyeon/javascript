//논리 연산자 Logical operator
// && 그리고 

//|| 또는 

//! 부정(단항연산자에서 온 것)
// !! 불리언값으로 변환(단항연산자 응용버전)

let num=21;

num=8;
if(num>=0 && num<9){
    console.log('good');
}
//둘중에 하나만 실행이 되어도 실행이 됨. 
if(num >=0 || num>20){
    console.log('good');
}
if(!(num >=0 || num>20)){
    console.log('good');
}

if(num != 8){
    console.log('good');
}

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true||false);
console.log(true||true);
console.log(false||false);
console.log(false||true);

console.log(!'text'); // 문자열은 true인데 부정하게 되므로 false가 됨 
console.log(!!'text'); // !!는 boolean 이 아닌것을 boolean으로 바꿔준다 