export class ImmigrationData {
    id: number;
    FullName: string;
    dateofbirth: string;
    passportCountry: string;
    CurrentResidence: string;
    visaStatus: string;
    explainVisaStatus: string;
    holdQualification: boolean;
    listTypeOfQualification: string;
    englishProficiency: string;
    isCompleteEngishTest: boolean;
    doYouHaveOffer: boolean;
    profession:string;
    professionOther:string;
    yearsOfExperience:string;
    education:string;
    desiredCountry:string;
    gender:string;
    filename:string;
    phoneNumber:string;
    email:string;
  
    constructor() {
      this.id = 0;
      this.FullName = '';
      this.dateofbirth = '';
      this.passportCountry = '';
      this.CurrentResidence = '';
      this.visaStatus = '';
      this.explainVisaStatus = '';
      this.holdQualification = false;
      this.listTypeOfQualification = '';
      this.englishProficiency = '';
      this.isCompleteEngishTest = false;
      this.doYouHaveOffer = false;
      this.profession = "",
      this.yearsOfExperience = "";
      this.education = "";
      this.desiredCountry = "";
      this.gender = "";
      this.filename = "";
      this.phoneNumber = "";
      this.email = "";
      this.professionOther = "";
    }


    [element: string]: any;

    get(element: string) {
        return this[element];
    }
  }
  

  export class ImmigrationResponse{
    response:string = "";
  }