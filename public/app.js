"use strict";
// classes 
class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const inOne = new invoice("mario", "work on the mario website", 300);
const inTwo = new invoice("luigi", "work on the hamster website", 100);
inOne.client = "suraj";
let invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);
const formEl = document.querySelector('.new-item-form');
// console.log(formEl.children)
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
