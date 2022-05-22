//주어진 숫자만큼 0부터 순회하는 함수

//순회하면서 주어진 특정한 일을 수행해야함 
//5, 순회하는 숫자를 다 출력하고 싶음 
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음 
//function iterate(max,action)



function iterate(max,action){
    for(let i = 0;i<max;i++){
        action(i); // action을 호출해줄 것임. 
    }
}

function log(num){
    console.log(num);
}

function doubleAndLog(num){
    console.log(num*2);
}
iterate(3,log);
iterate(3,doubleAndLog);


//화살표 함수를 이용해도 됨 
iterate(3,(num)=>console.log(num));
iterate(3,(num)=>console.log(num*2)); //이렇게 써도 됨. .

//setTimeout 이거 커맨드 눌러서 callback 함수 사용할수 있음 

setTimeout(callback,1000); // 1초가 지난후에 내 callback 함수 호출해줘!

setTimeout(()=>{
    console.log('1초 뒤 이 함수가 실행될거에요');
},1000);

setTimeout(()=>{
    console.log('3초 뒤 이 함수가 실행될거에요');
},3000);