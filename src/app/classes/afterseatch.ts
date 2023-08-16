export class AfterSearch{

    id:number = 0;
    full_name:string = "";
    age:number = 0;
    current_residence:string = "";
    contactlink:string ="";
    resumelink:string = "";

    constructor(id:number,
        full_name:string  ,
        age:number,
        current_residence:string ,
        contactlink:string,
        resumelink:string ){
            this.full_name = full_name;
            this.age = age;
            this.current_residence = current_residence;
            this.contactlink = contactlink;
            this.resumelink = resumelink;
    }
}