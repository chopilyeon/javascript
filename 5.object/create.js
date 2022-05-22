// const apple={
//     name:'apple';
//     display:function(){
//         console.log('${this.name}:사과'); // 객체 안에서 자기 자신의 속성에 접근하려면 this 라는 키워드가 필요함 
//     },
// };

// const orange={
//     name:'orange';
//     display:function(){
//         console.log('${this.name}:오렌지'); // 객체 안에서 자기 자신의 속성에 접근하려면 this 라는 키워드가 필요함 
//     },
// };


//계속 이렇게 만들기 귀찮음.

//특정한 템플릿에 맞게 생성자 함수를 이용해보자! 


//생성자 함수 
//대문자로 만들어야함

function Fruit(name,emoji){
    this.name=name;
    this.emoji=emoji;
    this.display = () => {
        console.log(`${this.emoji}+${this.name}`);
    };
    return this; // 이건 안써줘도 javascript 엔진이 알아서 해줌. 
}


//object를 쉽게 만들어보자 

const apple = new Fruit('apple','사과');
const apple = new Fruit('orange','오렌지');