import { PersonClass } from './task3';
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
  
  
  
  class WorkingPersonClass extends PersonClass {
      
      constructor(...obj) {
          super(...obj);
      }
  
      getProfessionalNameAndRank () {
          try {
              const keys = Object.keys(this.object.job);
              if (keys.length === 2 && this.object.firstName && this.object.lastName) {
                  return `${this.object.firstName} ${this.object.lastName}, ${this.object.job.title}, job experience ${this.object.job.experience} years`;
              }
        
              else throw new Error('Invalid object fields');
          }
          catch (error) {
              return error.message;  
              }
        }
  
  }
  person1 = new WorkingPersonClass(SarahMay);
  person2 = new WorkingPersonClass(JeremieBrown);
  person3 = new WorkingPersonClass(Elizabeth);
  console.log(person1.getProfessionalNameAndRank());
  console.log(person2.getProfessionalNameAndRank());
  console.log(person3.getProfessionalNameAndRank());