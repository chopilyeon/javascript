//let 은 재할당이 가능함 

let a = 1;
a = 2;

//const 는 재할당이 불가능
//1.상수
//2.상수변수 또는 변수 

const text = 'hello';
//text = 'hi'; 이거 에러남

//1. 상수

const MAX_FRUITS = 5; //이러면 값이 변하지 않음 

//2. 재할당 불가능한 상수변수 또는 변수

const apple={
    name:'apple',
    color:'red',
    display:'빨간사과 이미지',
};

//apple ={}; //이런게 불가능함. 
apple.name='orange';



console.log(apple); // 이러면 apple의 이름은 변함 

//객체는 heap이라는 공간에 저장이 됨. apple은 그냥 그 주소를 가르킬 뿐임. 
let cal="tt";
console.log(!!cal);
console.log(!cal);
console.log(cal);
let cal2;
console.log(cal2);
console.log(!undefined);
console.log(!2); //false
console.log(!!2); //ture
console.log(!0); //true
console.log(!!0); //false
console.log(!!3); //true