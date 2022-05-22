// 동등 비교 관계 연산자 (Equality operators)

// ==값이 같음 

// != 값이 다른지 확인함. 

// === 값과 타입이 둘다 같음 

// !== 값과 타입이 다름 

console.log(2==2);
console.log(2!=2);
console.log(2!=3);
console.log(2==3);
console.log(2=='2'); // true 담고 있는 2가 똑같으므로 true가 나오게 됨 

console.log(2==='2'); // 이러면 타입까지 확인하게 됨  타입 비교 관계 연산자 

console.log(true == 1);
console.log(true ===1);
console.log(false ==0);
console.log(false===0); //이러면 false가 나옴 false는 boolean 형이므로 
let obj1 = {
    name:'js'
};

const obj2={
    name:'js'
};




console.log(obj1==obj2); // 이러면 서로 다른 메모리 주소를 가지므로 다르게 됨 .

console.log(obj1===obj2); //type은 object지만 주소값 자체가 다르므로  false가 나옴 .

console.log(obj1.name==obj2.name);
console.log(obj1.name===obj2.name); 


let obj3=obj2;
console.log(obj3==obj2);
console.log(obj3===obj2); // 이러면 call by reference 이므로 






//이러면 새로운 objec가 만들어짐을 알 수 있다. 
let obj5 = {
    name:'js'
};

let obj6={
    name:'js'
};




console.log(obj5==obj6);
console.log(obj5===obj6);


