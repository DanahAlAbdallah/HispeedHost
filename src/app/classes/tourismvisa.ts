export class TourismVisa{
  constructor(
    public id: number = 0,
    public fullName: string = "",
    public dateOfBirth: string = "",
    public passportCountry: string = "",
    public currentResidence: string = "",
    public visaStatus: string = "",
    public explain: string = "",
    public desiredCountry: string = "",
    public phoneNumber: string = "",
    public email: string = "",
    public gender: string = ""
  ) {}
}