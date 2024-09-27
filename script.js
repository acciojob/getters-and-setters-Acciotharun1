//complete this code
class Person {
	constructor(name,age){
        this._name=name;
        this._age=age;
    }
    get name(){
        return this._name;
    }
    set age(age){
         this._age=age;
    }
    get age(){
        return this._age;
    }
}

class Student extends Person {
	study(){
        console.log(this._name +" "+ "is studying");
    }
}

class Teacher extends Person {
	teach(){
        console.log(this._name + " "+ "is teaching")
    }
}
//creating instance of class Person and calling name() & age() with getter and setter
const person=new Person("Tharun",23);
console.log(person.name);
person.age=30;
console.log(person.age);
//creating instance of class Student and calling study()
const student=new Student("mani",15);
student.study();
// creating instance of Teacher and calling teach()
const teacher=new Teacher("vasudeva", 25);
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
