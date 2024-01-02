export class Search{
   


    major:string;
    years:string;
    degree:string;
    gender:string;
    nationality:string

    constructor(
        
      ) {
        this.major = "";
        this.years = "";
        this.degree = "";
        this.gender = "";
        this.nationality = ""
      }

      [element: string]: any;

      get(element: string) {
          return this[element];
      }
}