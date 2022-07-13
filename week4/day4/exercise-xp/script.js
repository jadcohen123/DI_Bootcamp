// Exercise I
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
const {name, location: {country, city, coordinates: [lat, lng]}} = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);



// Exercise II

function displayStudentInfo({ first, last }) {
    console.log(`Your full name is ${first} ${last}`);
  }
  
  displayStudentInfo({ first: `Elie`, last: `Schoppik` });

// exerise III
  const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users);
console.log(usersArray);
for (let Id of usersArray) {
    Id[1] *= 2;
  }


// Exercise IV
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person('John');
console.log(typeof member);

 Exercise 5 : Dog Class 
class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  
// Exercise V

 [2] === [2]
 {} === {} 

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2; 
const object4 = { number: 5 }; 
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

class Animal {
    constructor(name, type, color) {
      this.animalName = name;
      this.animalType = type;
      this.animalColor = color;
    }
  }

  class Mamal extends Animal {
    constructor(name, type, color, sound) {
      super(name, type, color);
      this.animalSound = sound;
      this.sound = function (voice) {
        console.log(
          `${this.animalSound}, I'm a ${this.animalType}, named ${this.animalName} and I'm ${this.animalColor}`
        );
        return voice;
      };
    }
  }
  let farmerCow = new Mamal("Lily", "cow", "white with black spots", "Mooooo!!!");
farmerCow.sound();
  let huskyDog = new Mamal("Kinder", "Husky", "Copper", "Wuff Wuff");
  huskyDog.sound();
  
