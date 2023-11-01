export class HomeForm{

    private firstName:string = ""
    private lastName:string = ""
    private email:string = ""
    private service_type:string = ""
    private messages:string = ""


    public setFirstName(firstName:string){
        this.firstName = firstName;
    }

    public setLastName(lastName:string){
        this.lastName = lastName;
    }

    public setEmailName(email:string){
        this.email = email;
    }

    public setTypeName(service_type:string){
        this.service_type = service_type;
    }
    public setMessagesName(messages:string){
        this.messages = messages;
    }


    public getFirstName():string{
        return this.firstName
    }

    public getLastName():string{
        return this.lastName
    }

    public getEmailName():string{
        return this.email
    }

    public getTypeName():string{
        return this.service_type
    }

    public getMessagesName():string{
        return this.messages
    }
}