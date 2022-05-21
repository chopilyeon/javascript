//typeof : 데이터 타입을 확인
//값을 타입 문자열로 반환 
//c나 java는 이런식으로 숫자를 아예 할당해버림 
// int variable = 0; 정적으로 결정이 됨 

//자바 스크립트는 할당된 값에 따라서 타입이 변경이 됨. weakly type  ////// strongly type의 차이임 

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable =123; // 할당된 값에 따라 타입이 결정됨! 
console.log(typeof variable);

variable ={};
console.log(variable);

variable = function(){};
console.log(typeof variable);