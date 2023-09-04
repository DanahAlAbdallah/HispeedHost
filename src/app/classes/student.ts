export class Student{
    id:number;
    fullName:string;
    dateOfBirth:string;
    passportCountry:string;
    currentResidence:string;
    visaStatus:string;
    explain:string;
    listOfQualification:string;
    exam:string;
    degree:string;
    desiredCountry:string;
    doYouhaveScholarship:boolean;
    phoneNumber:string;
    email:string;
    gender:string;

    constructor(
        
      ) {
        this.id = 0;
        this.fullName = "";
        this.dateOfBirth = "";
        this.passportCountry = "";
        this.currentResidence = "";
        this.visaStatus = "";
        this.explain = "";
        this.listOfQualification = "";
        this.exam = "";
        this.degree = "";
        this.desiredCountry = "";
        this.doYouhaveScholarship = false;
        this.phoneNumber = "";
        this.email = "";
        this.gender= "";
      }

      [element: string]: any;

      get(element: string) {
          return this[element];
      }

}