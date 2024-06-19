"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    // constructor 
    function Person(name, contact, address, single) {
        //data-memeber(variable is the data member) 
        this.pname = "Vijay";
        this.pcontact = 6305340093;
        this.paddress = "chennai";
        this.psingle = true;
        this.paddharNumber = 780524562;
        this.pname = name;
        this.pcontact = contact;
        this.paddress = address;
        this.psingle = single;
    }
    //memeber function 
    Person.prototype.personDetails = function () {
        console.log("Name:".concat(this.pname, " contact:").concat(this.pcontact, " address:").concat(this.paddress, " single:").concat(this.psingle));
    };
    return Person;
}());
exports.Person = Person;
//how to create a object of class 
var personObj = new Person("vijayakumar", 9999999, "switherlland", true);
console.log(personObj.pname);
personObj.personDetails();
// //how to create a object of class 
// let personObj = new Person("vijayakumar", 9999999,"switherlland", true);
// console.log(personObj.pname); 
// personObj.personDetails();
