const obj={
    name:'엘리',
    age:20,
};
//코딩하는 시점에 정해지면 이렇게 쓸 수 있음 
obj.name;
obj.age; 


//동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용! 

function getValue(obj,key){
    // return obj.key; // key 라는 값을 갖고 있지 않으므로 이런식의 접근은 어려움. key는 정해지지 않음. 
    return obj[key]; // 이런식으로 적어서 접근할 수 있게 해주자. 
}

console.log(getValue(obj,'name')); // name을 전달하면 접근할 수 있게 됨. 

function addKey(obj,key,value){
    obj[key]=value; // 이런식으로 새로운 속성도 추가가 가능함. 

}

addKey(obj,'job','engineer');
console.log(obj);