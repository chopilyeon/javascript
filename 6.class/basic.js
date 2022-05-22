//객체를 손쉽게 만들 수 있는 템플릿
//1.생성자 함수 (오래된 고전적인 방법)
//2. 클래스 class


class Fruit{
    constructor(name,emoji){
        this.name=name;
        this.emoji=emoji;
    }
    display() { // 여기선 this 안붙여도 됨 //화살표 함수도 써도 되고 안써도 됨
        console.log(`${this.emoji}+${this.name}`);
    };
    display = ()=> { // 여기선 this 안붙여도 됨 //화살표 함수도 써도 되고 안써도 됨
        console.log(`${this.emoji}+${this.name}`);
    };
    
    return this; // 이건 안써줘도 javascript 엔진이 알아서 해줌. 
}
