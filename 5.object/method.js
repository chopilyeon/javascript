const apple={
    name:'apple';
    display:function(){
        console.log('${this.name}:사과'); // 객체 안에서 자기 자신의 속성에 접근하려면 this 라는 키워드가 필요함 
    },
};


apple.display();