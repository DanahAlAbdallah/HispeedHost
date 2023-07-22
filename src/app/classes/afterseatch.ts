export class AfterSearch{

    id:number = 0;
    name:string = "";
    age:number = 0;
    location:string = "";
    phonenumber:string = "";
    email:string = "";

    constructor(id:number,
        name:string  ,
        age:number,
        location:string ,
        phonenumber:string,
        email:string ){
            this.name = name;
            this.age = age;
            this.location = location;
            this.phonenumber = phonenumber;
            this.email = email;
    }
}