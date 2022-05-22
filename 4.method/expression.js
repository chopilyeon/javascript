//함수 선언문 function name(){}
//함수 표현식 const name =function () {}

//함수도 객체이기 때문에 이렇게 쓰는것도 가능함


let add = function (a,b){ // 무명함수임 무명함수가 add에 할당이 되는 것임 
    return a+b;
};

let add = function sum (a,b){ // 무명함수임 무명함수가 add에 할당이 되는 것임 sum이라는 거 입력해줘도 인식 못함. 
    return a+b;
};

//외부에서는 접근 못함 이런경우에는 함수 이름 설정안해줌. 

console.log(add(1,2));


//화살표 함수에 대해서 알아보자. 

add = (a,b) => {
    return a+b;
};

console.log(add(1,2));
