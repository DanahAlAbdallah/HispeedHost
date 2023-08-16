export class TourismVisa{
    id:number;
    fullName:string;
    dateOfBirth:string;
    passportCountry:string;
    currentResidence:string;
    visaStatus:string;
    explain:string;
    desiredCountry:string;

    constructor(
        
      ) {
        this.id = 0;
        this.fullName = "";
        this.dateOfBirth = "";
        this.passportCountry = "";
        this.currentResidence = "";
        this.visaStatus = "";
        this.explain = "";
        this.desiredCountry = "";
      }

      [element: string]: any;

      get(element: string) {
          return this[element];
      }
}