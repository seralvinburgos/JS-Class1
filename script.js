var userName="Seralvin";//old way
userName="Alvin";
let age=99;//defining the var age
age=98;
age=97;
age=96;
const taxes=11;//const-it does not change the value

console.log(userName);
console.log(age);
console.log(taxes);

//document.write("<p> Name: " + userName + "</p><p>Age: " + age + "</p><p>Taxes: " + taxes + "</p>");

document.write(`
<p style="color:blue">Name: ${userName}</p>
<p>Age: ${age}</p>
<p>Taxes: ${taxes}</p>
`);

let numberChildren="2";
let partnerName="EJ";
let geoLocation="Jacksonville, FL";
let jobTitle="Software Developer";

console.log(numberChildren);
console.log(partnerName);
console.log(geoLocation);
console.log(jobTitle);

document.write(`
<p> You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberChildren} kids.</p>
`);

let clientName="Alvin";
let email="alvin.burgos@gmail.com";
let password="******";
let clientAge="40";
let country="United States";
let salary="5000"
let annualSalary=salary*12;

document.write(`
<p>Name: ${clientName}</p>
<p>Email: ${email}</p>
<p>Password: ${password}</p>
<p>Age: ${clientAge}</p>
<p>Country: ${country}</p>
<p>Salary: ${annualSalary}</p>
`)

console.log(clientName);
console.log(email);
console.log(annualSalary);