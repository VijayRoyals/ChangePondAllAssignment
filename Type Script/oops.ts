export class  Person { 
    //data-memeber(variable is the data member) 
    pname:string = "Vijay"; 
    protected pcontact:number=6305340093; 
    paddress:string="chennai"; 
    psingle:boolean=true;   
    private paddharNumber:number=780524562;
    // constructor 
    constructor(name:string, contact:number, address:string,single:boolean){
        this.pname =name; 
        this.pcontact = contact; 
        this.paddress = address; 
        this.psingle = single; 
    }

    //memeber function 
    personDetails() {
        console.log(`Name:${this.pname} contact:${this.pcontact} address:${this.paddress} single:${this.psingle}
            Aadhar:${this.paddharNumber}`)
    }
}


//how to create a object of class 
let personObj = new Person("vijayakumar", 9999999,"switherlland", true);
console.log(personObj.pname); 
personObj.personDetails();




// //how to create a object of class 
// let personObj = new Person("vijayakumar", 9999999,"switherlland", true);
// console.log(personObj.pname); 
// personObj.personDetails();