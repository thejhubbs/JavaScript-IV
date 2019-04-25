// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }

    //Logs a string `Hello my name is ${name}, I am from ${location}`
    speak() {

    }
}


class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo() {

    }   
    grade() {
        
    }
}



class Student extends Person {
    constructor(attr){
        super(attr);
    }
}



class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
    }
}


