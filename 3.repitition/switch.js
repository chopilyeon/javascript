//switch도 조건문에 해당함 conditional statement임 
//switch
//if else if else if else if ... else
//정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우 

let day = 6; // 0: 월요일, 1: 화요일 ... 6: 일요일 

let dayName;


//너무 빡셈 이러면 안됨
// if(day === 0){
//     dayName='월요일';
// }else if(day===1){
//     dayName='화요일';
// }

//switch라는 keyword를 이용해보자 

switch(day){
    case 0:
        dayName='월요일';
        break; // 그 다음 케아스를 확인하지 않도록 하자! 
    case 1:
        dayName='화요일';
        break;
    case 2:
        dayName='수요일';
        break;
}


console.log(dayName);

let condition = 'okay'; // okay, good -> 좋음 ! , bad -> 나쁨! 
let text;
//break 를 안걸면 이상해지는 경우가 생기더라~! 
switch(condition){
    case 'okay':
    case 'good':
        text = '좋음!';
        break;
     case 'bad':
         text = '나쁨';
         break;      
}

switch(condition){
    case 'okay':
    case 'good':
        text = '좋음!';
        break;
     case 'bad':
         text = '나쁨';
         break;      
    default:
        console.log('해당 하는 요일이 없음');
}

//switch에서 else도 쓸 수 있음 

