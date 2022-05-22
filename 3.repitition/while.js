//while (조건) {}
// 조건이 false가 될떄까지 {} 코드를 반복 실행

let num = 5;
while(num>=0){
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;

//while에서도 break continue 다 가능함. 
while (isActive){
    console.log('아직 살아있다');
    if(i===1000){
        break;
    }
    i++;
}

//dowhile이라는 것이 있음 

//while은 조건이 맞을 때만 실행이 됨 
//do while은 무조건 1번 실행이 됨. 

isActive=false;


do{
 console.log('do while 은 살아있다');
}while(isActive);

