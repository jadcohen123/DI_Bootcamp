// Exercise I
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);
const country = "USA";
console.log([...country]); 
let newArray = [...[, ,]];
console.log(newArray);
[...[, ,]];



// Exercise II
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const welcomeStudents = users.map((element) => {
    console.log(`Hello, ${element["firstName"]}`)
});
const newArray = users
				.filter((elem)=>elem["role"].includes('Full Stack Resident'))
				.map((person)=>person["lastName"]);
console.log(newArray)



// execise III
let epic = ['a ', 'long ', 'time ', 'ago ', 'in a ', 'galaxy ', 'far far ', 'away '];
const epicString= epic.reduce((acc, string) => {
    return acc + string;
  }); console.log(epicString);



// Exercise VI
let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
const passed = students
                    .filter((elem) => elem.isPassed == true)
                    .map((person) => {
                       return `Good job ${person["name"]}, you passed the course in ${person["course"]}`});
                   
console.log(passed);
