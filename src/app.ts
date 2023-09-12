// classes 
class invoice {
    client: string;
    details: string;
    amount: number;

    constructor (c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a  
    }

    format () {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const inOne = new invoice("mario", "work on the mario website", 300)
const inTwo = new invoice("luigi", "work on the hamster website", 100)
inOne.client = "suraj"

let invoices: invoice[] = [];
invoices.push(inOne)
invoices.push(inTwo)

console.log(invoices)

const formEl = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(formEl.children)

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
  
formEl.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})