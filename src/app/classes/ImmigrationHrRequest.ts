export class ImmigrationHrRequest{
    profession:string;
    education:string;
    yearOfExp:string;
    gender:string;


    constructor(){
        this.education = "";
        this.profession = "";
        this.yearOfExp = "";
        this.gender = "";
    }
}