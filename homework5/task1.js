const SarahMay = {
  firstName: "Sarah",
  lastName: "May",
  birthDate: "13.03.1990",
  address: {
      country: "Spain",
      city: "Seville",
      street: "calle Verde",
      house: "5",
      apartment: "2A",
  },
  job: {
      title: "teacher",
      experience: 5
  }
}

const JeremieBrown = {
  firstName: "Jeremie",
  lastName: "Brown",
  birthDate: "10.11.1983",
  address: {
    country: "Great Britain",
    city: "Bristol",
    street: "Park street",
    house: "14"
  },
  job: {
    title: "sale manager",
    experience: 10
  }
}

const Elizabeth = {
  firstName: "Elizabeth",
  birthDate: "27.02.1998",
  address: {
    country: "Italy",
    city: "Verona",
    street: "via Calchirelli",
    house: "9F",
    apartment: "49",
  },
  job: {
    title: "fitness coach",
    experience: 1.5
  }
}


//created a constructor
function PersonFunc (object){
  this.object = object;
}

//created a new instance of the object from the constructor
let person1 = new PersonFunc(SarahMay);
let person2 = new PersonFunc(JeremieBrown);
let person3 = new PersonFunc(Elizabeth);

//add methods to the constructor prototype
PersonFunc.prototype.getFullName = function() {
  try {
      if (this.object.firstName && this.object.lastName) {
        return `${this.object.firstName} ${this.object.lastName}`; 
      }
    
      else throw new Error('Invalid object fields');
  }
  catch (error) {
      return error.message;
  }
}

PersonFunc.prototype.getAge = function(){
  try {
      const todayDate = new Date();
      const currYear = Number(todayDate.getFullYear());
      let personBirthDate = this.object.birthDate.split('.');
      let personYear = personBirthDate[personBirthDate.length-1];
    
      if (this.object.birthDate) {
        const resAge = currYear - personYear;
        return `${resAge} years`;
      }

      else throw new Error('Invalid object fields');
  }
  catch (error) {
      return error.message; 
  }
}
  
PersonFunc.prototype.getFullAddress = function() {
  try {
      const keys = Object.keys(this.object.address);
      if (keys.length === 5) {
          return `${this.object.address.country}, ${this.object.address.city}, ${this.object.address.street}, ${this.object.address.house}/${this.object.address.apartment}`;
        }
          
      else if (keys.length === 4) { 
          return `${this.object.address.country}, ${this.object.address.city}, ${this.object.address.street}, ${this.object.address.house}`; 
        }

      else throw new Error('Invalid object fields');     
  }

  catch (error) {
      return error.message; 
  }
}        

console.log("==============About person1==============")
console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.getFullAddress());

console.log("==============About person2==============")
console.log(person2.getFullName());
console.log(person2.getAge());
console.log(person2.getFullAddress());

console.log("==============About person3==============")
console.log(person3.getFullName());
console.log(person3.getAge());
console.log(person3.getFullAddress());