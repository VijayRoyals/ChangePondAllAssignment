console.log("Good Afternoon You All")


//1.number data type 
let num1:number = 100, num2:number=0.5, num3:number=12123; 
console.log(num1, num2, num3); 

//2.String data type 
let fname:string ="Vijay", lname:string="Kumar"; 
console.log(fname, lname); 

//3.Boolean datatype 
let cond1:boolean = true, cond2:boolean= false; 
console.log(cond1, cond2); 

//4.Array 
let students:string[] = ["Vijay", "kumar", "changepond","2"]
let emp:Array<String> = ["Vijay", "Royal"]

//5.tuple data : it allow user to store multiple type of data in array.

let product:[number,string] = [101, "vijay"]
//6.enum data: it is use to create constant variable with value. 
enum days{sun, mon, tue, wed, thus,fri,sat }; 
let data1 = days.sun; 
let data2 = days.mon;
let data3 = days.thus;  
 

//7.union data: it allows user to store multiple type of data in single variable. 

let  items:string|number=234532; 
//any datatype: when we don't know what type of data is going to store in a variable 
let futureData:any=true;