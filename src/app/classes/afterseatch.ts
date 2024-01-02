export class AfterSearch{

    id:number = 0;
    full_name:string = "";
    age:number = 0;
    current_residence:string = "";
    contactlink:string ="";
    link_cv:string = "";
  years_of_experience:number = 0;
  image_file :string = ""
  passport_country:string = "";
  education:string  = "";

  constructor(id:number,
        full_name:string  ,
        age:number,
        current_residence:string ,
        contactlink:string,
        link_cv:string ,
              years_of_experience:number,
              image_file:string,
              passport_country:string,
              education:string
  ){
            this.full_name = full_name;
            this.age = age;
            this.current_residence = current_residence;
            this.contactlink = contactlink;
            this.link_cv = link_cv;
            this.years_of_experience = years_of_experience;
            this.image_file = image_file;
    this.passport_country = passport_country;
    this.education = education;
  }
}

export class AfterSearch1{

  id:number = 0;
  full_name:string = "";
  age:number = 0;
  current_residence:string = "";
  contactlink:string ="";
  link_cv:string = "";
  gender:string = "";
  profession:string = "";
  years_of_experience:number = 0;
  image_file :string = ""
  passport_country:string = "";
  education:string  = "";

  constructor(id:number,
              full_name:string  ,
              age:number,
              current_residence:string ,
              contactlink:string,
              link_cv:string ,
              gender:string,
              profession:string,
              years_of_experience:number,
              image_file:string,
              passport_country:string,
              education:string
  ){
    this.full_name = full_name;
    this.age = age;
    this.current_residence = current_residence;
    this.contactlink = contactlink;
    this.link_cv = link_cv;
    this.gender = gender;
    this.profession = profession;
    this.years_of_experience = years_of_experience;
    this.image_file = image_file;
    this.passport_country = passport_country;
    this.education = education
  }
}
