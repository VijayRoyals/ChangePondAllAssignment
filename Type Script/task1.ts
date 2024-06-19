function displayFullName(fname: string, mname: string, lname: string): void {
    const fullName: string = `${fname} ${mname} ${lname}`;
    console.log(fullName);
}


const firstName: string = "Vijay";
const middleName: string = "kumar";
const lastName: string = "K";

displayFullName(firstName, middleName, lastName);
