class WorkingPersonClass extends PersonClass {
    
    constructor(...obj) {
        super(...obj);
    }

    getProfessionalNameAndRank () {
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

}
person1 = new WorkingPersonClass(SarahMay);
person2 = new WorkingPersonClass(JeremieBrown);
person3 = new WorkingPersonClass(Elizabeth);
person1.getProfessionalNameAndRank();
person2.getProfessionalNameAndRank();
person3.getProfessionalNameAndRank();