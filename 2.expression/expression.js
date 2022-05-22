let b; //선언문
b=2; //표현식, 할당문

// let a = let b; // let b라는 선언문 자체는 값을 생성하는 것이 아니므로 에러가 발생하게 됨. 

let a = (b = 2); //코드의 흐름을 알자. 
console.log(a); // 이러면 2가 발생하게 됨

let c = "ss";
let d = "sss";
