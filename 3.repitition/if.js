// 조건문 Conditional Statement 

//if(조건){}
//if(조건){}else{}
//if(조건){}else if(조건2) {} else{}

let fruit = 'apple';
if(fruit === 'apple'){
    console.log('apple');
}

fruit = 'orange'; 



if(fruit === 'apple'){
    console.log('apple');
}else{
    console.log('!!!');
}



if(fruit === 'apple'){
    console.log('apple');
}else if(fruit==='orange'){
    console.log('!!!');
}else{
    console.log('orange');
}


if(2>1){
    console.log('출력되면 안됨!');
}


//삼항 조건 연산자 Ternary Operator
// 조건식? 참인경우 : 거짓인 경우 

//simple하게 작성해보자 

fruit = apple;
fruit === 'apple'? console.log('good'):console.log('bad');

let emoji = fruit ==='apple'? 'apple':'banana';