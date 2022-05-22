const add = (a,b)=>a+b;

const multiply=(a,b)=>a*b;



//action이라는 reference만 받고 그걸 호출해서 실행함. 
function caculator(a,b,action){
    //action을 전달받겠다! 
    let result = action(a,b); // action이라는 referal 을 실행함. 
    console.log(result); 
    return result; 

}

caculator(1,2,add);