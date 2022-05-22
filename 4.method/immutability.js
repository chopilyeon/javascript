//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 매우 좋지 않음/ 
//상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야함 
//원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소)


function display(num){
    console.log(num);
}

const value=4;
display(value): // 이러면 4가 출력이 됨. 

//이건 사실은 
//중간에 let num=4를 써준것과 같음. 


function display(num){
    let num=4; // 이런건 매우 좋지 않음 
    console.log(num);
}

const value=4;
display(value);
console.log(value);

