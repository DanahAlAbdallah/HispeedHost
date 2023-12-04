export class ImmigrationHrRequest{
    profession:string;
    education:string;
    yearOfExp:string;
    gender:string;
    nationality:string;


    constructor(){
        this.education = "";
        this.profession = "";
        this.yearOfExp = "";
        this.gender = "";
        this.nationality = ""
    }
}