let studentName = prompt("Enter student name: ")
let studentEmail = prompt("Enter student email: ")
let purchase1 = prompt("Enter purchase description: ")
let price1 = Number(prompt("Enter product price: "))
let quantity1 = Number(prompt("Enter quantity: "))
let purchase2 = prompt("Enter product(2) description: ")
let price2 = Number(prompt("Enter product(2) price: "))
let quantity2 = Number(prompt("Enter quantity: "))
let purchase3 = prompt("Enter product(3) description: ")
let price3 = Number(prompt("Enter product(3) price: "))
let quantity3 = Number(prompt("Enter quantity: "))

let subtotal1 = (price1*quantity1);
let subtotal2 = (price2*quantity2);
let subtotal3 = (price3*quantity3);
let subtotalFinal = (subtotal1+subtotal2+subtotal3);
let finalTotal = (subtotalFinal * .06;

document.getElementById("customerInfo").innerHTML =`
    <h2>Customer Information</h2>
    <p> Name: ${studentName} </p>
    <p> Email: ${studentEmail} </p>
    `;

document.getElementById("productInfo").innerHTML =`
    <h2>Product Information</h2>
    <p> Product: ${purchase1} </p>
    <p> Price: ${price1}</p>
    <p> Quantity: ${quantity1}</p>
    <hr>
    <p> Product: ${purchase2}</p>
    <p> Price: ${price2}</p>
    <p> Quantity: ${quantity2}</p>
    <hr>
    <p> Product: ${purchase3}</p>
    <p> Price: ${price3}</p>
    <p> Quantity: ${quantity3}</p>
    <hr>
`;

document.getElementById("totalValues").innerHTML =`
    <p> Subtotal: ${subtotalFinal} </p>
    <p> Sales Tax 6% </p>
    <h3> TOTAL: ${finalTotal}</p>
`;
