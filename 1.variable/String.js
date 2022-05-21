//다 문자열을 나타내는 기호임 `  ' " 
let string = "안녕하세요"; 
string = `안녕`;
console.log(string);
string = '"안녕"';
string = "'안녕!'";





//따옴표를 출력하고 싶으면 반대되는 따옴표를 쓰면 됨. 


//이스케이프 표현을 할 수 있음 

string = '안녕!\n엘리야!\t\t\t\t 내 이름은\\'; // \ 인식하게 하려면 2번 쓰면 됨 
console.log(string);


// 템플릿 리터럴 (Tempalate Literal)
let id = '엘리';
let greetings = "'안녕!, " +  id + "\n 즐거운 하루 보내요!'";
console.log(greetings);

//이게 너무 귀찮음 

greetings=`'안녕, ${id} 즐거운 하루 보내요!`;