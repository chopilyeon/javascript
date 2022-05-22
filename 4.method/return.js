//return을 하지 않으면 자동적으로 return undefined 를 반환하게 됨 


function add(a,b){
    return a+b;

}

const result = add(1,2);

console.log(result); 

//print같은 경우는 굳이 return이 필요없기는 함.

function print(num){
    if(num<0){
        return;
    }
    console.log(num);
}