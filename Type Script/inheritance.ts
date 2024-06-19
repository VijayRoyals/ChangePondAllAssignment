import { Person } from "./oops";

class Company extends Person { 
    cname:string; 
    gstnumber:number; 
    state:string; 
constructor(name:string,contact:number,address:string,single:boolean,compName:string,compGst:number,compState:string) { 
super(name,contact,address,single); 

this.cname = compName; 
this.gstnumber = compGst; 
this.state=compState; 
}

    personDetails() { 
        console.log(` Name.${this.pname},Contact:${this.pcontact}, Single:${this.psingle}, Adress:${this.paddress}, 
            CompanyName:${this.cname} GST Number:${this.gstnumber} State:${this.state}`);
    }
}

let compObj = new Company("VIJAY", 6305340093,"Kerala",true, "Changepond", 12345, "Tamilnadu")
console.log(compObj);