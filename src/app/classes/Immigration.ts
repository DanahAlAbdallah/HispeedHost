export class ImmigrationData {
  constructor(
    public id: number,
    public FullName: string,
    public dateofbirth: string,
    public passportCountry: string,
    public CurrentResidence: string,
    public visaStatus: string,
    public explainVisaStatus: string,
    public holdQualification: boolean,
    public listTypeOfQualification: string,
    public englishProficiency: string,
    public isCompleteEngishTest: boolean,
    public doYouHaveOffer: boolean,
    public profession: string,
    public yearsOfExperience: string,
    public education: string,
    public desiredCountry: string,
    public gender: string,
    public filename: string,
    public phoneNumber: string,
    public email: string,
    public professionOther: string,
    public imageFile:string
  ) {}


}



  export class ImmigrationResponse{
    response:string = "";
  }
