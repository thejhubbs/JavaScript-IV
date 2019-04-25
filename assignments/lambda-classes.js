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
        console.log(`Hello my name is ${name}, I am from ${location}`);
    }
}

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    //Input- subject Str
    //Logs "Today we are learning about ${subject}"
    demo(subject) {

    }  

    //Input- student Obj, subject Str
    //Logs "${student name} recieved a perfect score on ${subject}" 
    grade(student, subject) {

    }

    test(){
        
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
        this.prevBackgound = attr.prevBackgound;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;

    }

    // `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    listSubjects() {

    }

    // `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
    PRAssignment(subject) {

    }

    // `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
    sprintChallenge(subject) {

    }

    test(){
        
    }

}

class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    
    // `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    standUp(){

    }

    // `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
    debugsCode(){

    }

    test(){

    }
}

const jordan = new Student({
    name: "Jordan",
    age: 25,
    location: "Ohio",
    gender: "M",
    prevBackground: "Landscaping",
    className: "WebPT6",
    favSubjects: ['HTML', "Ruby", "JQuery"]
});

const bill = new Student({
    name: "Bill",
    age: 26,
    location: "Ohio",
    gender: "M",
    prevBackground: "Landscaping",
    className: "WebPT6",
    favSubjects: ['HTML', "Ruby", "JQuery"]
});

const kieran = new Instructor({
    name: "kieran",
    age: 28,
    location: "USA",
    gender: "M",
    specialty: "Computers",
    favLanguage: "HTML",
    catchPhrase: "Howdy there folks"
});

const marious = new ProjectManager({
    name: "marious",
    age: 28,
    location: "USA",
    gender: "M",
    specialty: "Computers",
    favLanguage: "HTML",
    catchPhrase: "Pick your favorite emoji",
    gradClassName: "Web17",
    favInstructor: "Knell"
});

console.log(jordan.test());
console.log(bill.test());
console.log(kieran.test());
console.log(marioius.test());
