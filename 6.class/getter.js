//접근자 프로퍼티(Accessor Property)

class student{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    fullName(){
        return `${this.lastName}${this.firstName}`;
    }
}


const student = new Student('수지','김');
console.log(student.fullName());