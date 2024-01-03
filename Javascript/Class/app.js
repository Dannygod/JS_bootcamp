// constructor prototype inheritance
function Person(name, age){
    this.name = name,
    this.age = age
}
Person.prototype.sayHi = function (){
    console.log(this.name + " say Hi");
}
function Student(name, age, score, major){
    Person.call(this, name, age)
    this.score = score,
    this.major = major
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // not necessary
const Danny = new Student("Danny", 19, 100, "CS");
console.log(Danny);
Danny.sayHi();


// class 
class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHi(){
        console.log(this.name + " say Hi");
    }
}
class Dog extends Animal{
    constructor(name, age, leg){
        super(name, age)
        this.leg = leg
    }
    bark(){
        console.log(this.name + " bark!")
    }
}
let Pipi = new Dog("Pipi", 3, 4);
console.log(Pipi);
Pipi.bark();
console.log(Pipi.leg);

// static
class Circle{
    static pi = 3.141592653;
    constructor(r){
        this.r = r
    }
    area(){
        return this.r * this.r * Circle.pi;
    }
    static formula(){ // method (not a funtion) 
        console.log("area: r * r * pi");
    }
}
Circle.formula();
console.log(Circle.pi);
let c1 = new Circle(5);
// c1.formula();
console.log(c1.area());
