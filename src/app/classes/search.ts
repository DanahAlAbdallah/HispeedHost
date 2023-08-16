export class Search{
   


    major:string;
    years:string;
    degree:string;
    gender:string;

    constructor(
        
      ) {
        this.major = "";
        this.years = "";
        this.degree = "";
        this.gender = "";
      }

      [element: string]: any;

      get(element: string) {
          return this[element];
      }
}