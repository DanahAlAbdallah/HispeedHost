export class Student {
  constructor(
    public id: number = 0,
    public fullName: string = "",
    public dateOfBirth: string = "",
    public passportCountry: string = "",
    public currentResidence: string = "",
    public education: string = "",
    public visaStatus: string = "",
    public explain: string = "",
    public exam: string = "",
    public degree: string = "",
    public desiredCountry: string = "",
    public doYouHaveScholarship: boolean = false,
    public phoneNumber: string = "",
    public email: string = "",
    public gender: string = "",
    public certificate_link:string =""
  ) {}
}
