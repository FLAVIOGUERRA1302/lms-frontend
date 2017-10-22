export class Assignment {
    name: String;
    description: string = '';
    startDate: Date;
    endDate: Date;
    courseId: number;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }