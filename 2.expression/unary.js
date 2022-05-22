//단항 연산자 Unary Operators 
//+ (양)
//- (음)
//! (부정)
let a = 5;
a=-a; // -1 * 5 가 됨 
console.log(a);
a= -a; 
console.log(-a);


a = +a; 
console.log(a);

a= - a; //-5로 만듬 
a= +a; // -에 + 이므로 -가 됨 

console.log(a); 

//부정에 또 부정을 때려버림. 
let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

console.log(!!1); //! 부정연산자 
//!! 값을 boolenan 타입으로 변환함


// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음

console.clear();
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'text'); //NaN - > not a number 
console.log(+undefined);


console.log(!1); // 1이 가지고 있는 bollean의 반대값이 출력이 됨. 1은 원래 true임. ture를 부정하면 false
console.log(!!1); // false를 또 부정하므로 1의 원래값인 true가 나옴 boolean이 아닌 값을 boolean값으로 변환하는거임. 
