class Grocery {
    #name: string;
    #quantity: number;
    #price: number;
    #priceFormatter: Intl.NumberFormat;

    constructor(name: string, quantity: number, price: number, priceFormatter: Intl.NumberFormat) {
        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
        this.#priceFormatter = priceFormatter;
    }

    get name(): string {
        return this.#name;
    }

    get quantity(): number {
        return this.#quantity
    }

    get formattedPrice(): string {
        return this.#priceFormatter.format(this.#price);
    }

    get formattedTotal(): string {
        const total = this.#price * this.#quantity;
        return this.#priceFormatter.format(total);
    }
}

const priceFormatter = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });
const groceryItems: Grocery[] = [
    new Grocery('Milk', 2, 2.99, priceFormatter),
    new Grocery('Bread', 4, 1.99, priceFormatter),
    new Grocery('Frozen Pizza', 1, 5.99, priceFormatter)
];

const listEl = document.querySelector('#grocery-list') as HTMLUListElement;

groceryItems.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name}, ${item.quantity} @ ${item.formattedPrice} = ${item.formattedTotal}`;
    listEl.appendChild(li);
});