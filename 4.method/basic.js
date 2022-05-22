function add(num1,num2){
    const result = num1+num2; // 굳이 변수로 할당할 필요는 없음 
    //return num1+num2; 로 해도됨
    console.log('function'); // 아무도 호출안했으므로 아무것도 출력이 안됨 
    return result;
}

add(1,2);

const result = add(1,2);
console.log(result);


let lastName='김';
let firstName='지수';
// let fullName=`${lastname}+${firstName}`;
// console.log(fullName);

//코드가 중복적으로 나오면 안좋음. 함수로 만들어보자! 

function fullName(firstName, lastName){
    return `${firstName}${lastName}`;
}
console.log(fullName(firstName,lastName)); //함수에서도 쓰이고 변수에서도 쓰이는 이름은 쓰지 말자! 

