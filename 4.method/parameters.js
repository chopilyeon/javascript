//매개변수의 기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨 

function add (a,b){ 
    console.log(a);
    console.log(b);
    console.log(arguments);
    //배열에서 
    //배열처럼 접근이 가능하더라 
    console.log(arguments[0]);
    console.log(arguments[1]);
    // 다 출력이 가능함. 
    return a+b;

}


//기본값도 정해줄수가 있음 (아무것도 사용자가 안쓰면 defualt parameter a=1 b=1 을 씀 )
function add (a=1,b=1){ 
    console.log(a);
    console.log(b);
    console.log(arguments); // 유용한 property arguments가 있다!! 들어온값들을 확인할 수가 있음. 
    //배열에서 
    //배열처럼 접근이 가능하더라 
    console.log(arguments[0]);
    console.log(arguments[1]);
    // 다 출력이 가능함. 
    return a+b;

}




add(1,2,3,4); // 추가적인 값들은 무시해버림 

//Rest 매개변수 Rest Parameters

//몇개를 입력받을지 모를 떄 사용함. 
//저런식으로 배열로 받는 것임 배열의 유동적인 특성을 이용한 것 

function sum (... numbers){
    console.log(numbers);

}
sum(1,2,3,4,5,6,7,8,9);

function sum (a,b,... numbers){
    console.log(numbers);

}


