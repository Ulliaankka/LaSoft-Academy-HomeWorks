function WorkingPersonFunc(object) {
  PersonFunc.apply(this, arguments);
}

WorkingPersonFunc.prototype = Object.create(PersonFunc.prototype);
WorkingPersonFunc.prototype.constructor = WorkingPersonFunc;

person1 = new WorkingPersonFunc(SarahMay);
person2 = new WorkingPersonFunc(JeremieBrown);
person3 = new WorkingPersonFunc(Elizabeth);

WorkingPersonFunc.prototype.getProfessionalNameAndRank = function() {
  try {
      const keys = Object.keys(this.object.job);
      if (keys.length === 2 && this.object.firstName && this.object.lastName) {
          console.log(`${this.object.firstName} ${this.object.lastName}, ${this.object.job.title}, job experience ${this.object.job.experience} years`);
      }

      else throw new Error('Invalid object fields');
  }
  catch (error) {
      console.log('error: ', error);  
      }
}
person1.getProfessionalNameAndRank();
person2.getProfessionalNameAndRank();
person3.getProfessionalNameAndRank();