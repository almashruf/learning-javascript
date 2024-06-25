
// javascript object

var student1 = {
    name: "tonoy",
    age: 23,
    cgpa: 3.92,
    lang: ["bang", "eng"]
}


console.log(student1.lang)

var student2 = {
    name: "tonoy1",
    age: 23,
    cgpa: 3.92,
    lang: ["bang", "eng"]
}


console.log(student2.lang)

var student3 = {
    name: "tonoy2",
    age: 23,
    cgpa: 3.92,
    lang: ["bang", "eng"]
}


console.log(student3.lang)


// constructor ->

function Student(name,age,cgpa){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;

    // addding funtion in a constructor ->

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
    }
}


var student1 = new Student("rakib",23,3.33);
var student2 = new Student("rakb",23,3.33);
var student3 = new Student("rkib",23,3.33);

student1.display();


// math object 


// gussing game using js


// date object and date method


