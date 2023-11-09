export class ApplyForJob{
    constructor(
        public fullName: string,
        public dateofbirth: string,
        public passportCountry: string,
        public currentResidence: string,
        public englishProficiency: string,
        public completeEnglishTest: boolean,
        public profession: string,
        public yearsOfExperience: string,
        public education: string,
        public desiredCountry: string,
        public gender: string,
        public linkCv: string,
        public phoneNumber?: string,
        public email?: string,
        public imageFile?:string
      ) {
        this.status = 'Pending';
      }

      status: string = 'Pending';
}
