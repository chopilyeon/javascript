class Tiger{
    constructor(color){
        this.color=color;
    }
    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다');
    }
}

class Dog{
    constructor(color){
        this.color=color;
    }
    eat(){
     console.log('먹자!');   
    }
    sleep(){
     console.log('잔다');
    }
    play(){
     console.log('놀자');

    }
}

class Animal{
    constructor(color){
        this.color=color;
    }
    eat(){
        console.log('먹자');
    }
    sleep(){
        console.log('잔다');
    }
}

class Tiger extends Aniaml{}
const Tiger = new Tiger('노랑이');
console.log(Tiger);
Tiger.sleep();
Tiger.eat();


//이런식으로 자식속성에서 뭔가 더 추가가능함 
class Dog extends Aniaml{
    constructor(color,ownerName){
        super(color); // 부모 생성자에 color를 전달해주고 부모 클래스에 color를 전달함 
        this.ownerName=ownerName;
    }

    play(){
        console.log('놀자아~!');
    }
    eat(){
        console.log('강아지가 먹는다'); // 이런식으로 오버라이딩도 가능함. 
    }


}

class Dog extends Aniaml{
    constructor(color,ownerName){
        super(color); // 부모 생성자에 color를 전달해주고 부모 클래스에 color를 전달함 
        this.ownerName=ownerName;
    }

    play(){
        console.log('놀자아~!');
    }
    eat(){
        super.eat(); // 부모의 먹자도 갖다 쓸수 있음! super를 이용하면 부모 클래스에 있는거 끌어올 수 있음. 
        console.log('강아지가 먹는다'); // 이런식으로 오버라이딩도 가능함. 
    }


}



const dog = new Dog('빨강이','엘리');
console.log(dog);
dog.sleep();
dog.eat();
//dog는 play가 가능함 
dog.play();
