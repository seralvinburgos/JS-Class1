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
let salesTax = (subtotalFinal) * .06;
let finalTotal = (subtotalFinal+salesTax);

document.getElementById("customerInfo").innerHTML =`
    <h3>Customer Information</h3>
    <p> Name: ${studentName} </p>
    <p> Email: ${studentEmail} </p>
    `;

document.getElementById("productInfo").innerHTML =`
    <h3>Product Information</h3>
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
    <p> Sales Tax 6%: ${salesTax} </p>
    <h4> TOTAL: ${finalTotal}</h4>
`;

console.log(purchase1, purchase2, purchase3);
console.log(price1, price2, price3);
console.log(quantity1, quantity2, quantity3);
console.log(subtotal1, subtotal2, subtotal3);
console.log(subtotalFinal);
console.log(salesTax);
console.log(finalTotal);
