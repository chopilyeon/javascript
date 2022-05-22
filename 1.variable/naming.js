//주석을 달면 됨
/**
 * 이러면 여러개의 주석이 됨 
 * 다음줄로 자동으로 넘어가게 됨 
 * 개발자들을 위해 설명을 다는 것이 주석임
 * 
 */

/**
 * 변수 규칙 
 * 라틴 문자(0-9,A-Z,a-z)
 * 대소문자를 구분함 
 * 추천:CAMEL CASE
 * 한국어x
 * 예약어x
 * 숫자로 시작x
 * 특수문자x(_,$ 두가지는 예외);
 * 이모지x
 * 최대한 의미있게 구체적인 이름으로 작성하자! 
 * 
 * 
 * 
 */


let apple;
let redApple;

//나쁜 예제

let num = 20;

//좋은 예제

let myAge=20;

//나쁜 예제
let audio1;
let audio2; 

//좋은 예제

let backgroundAudio;
let windAudio;

//꿀팁!

let audioBackground;
let audioWind; 

//이러면 나중에 audio 관련해서 싹다 변수 긁어올 수 있게 됨. 



//자바는 숫자 그냥 아무거나 쓰면 숫자로 인식해버림. 

let integer = 123; // 정수 
let negative = -123; // 음수
let double = 1.23 // 실수 

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b111011 //2진수  0b를 붙이고 2진수를 쓰자. 
let octal = 0o173;
let hex=0x7b //16진수 
console.log(hex);

console.log(0/123); //0
console.log(123/0); //infinity
console.log(123/-0); //-infinity
console.log(123/'text'); //NoN(Not a number)

//끝자리에 n을 붙임. 

let bingInt = 1234566666666667888888888888888888888880n;
console.log(bigInt);