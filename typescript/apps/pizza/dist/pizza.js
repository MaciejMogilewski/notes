"use strict";
let pizzaCost = 10;
// pizzaCost = '25';
function calculatePrice(cost, toppings) {
    return cost + 1.5 * toppings;
}
// String type
const coupon = 'pizza25';
function normalizeCoupon(code) {
    return code.toUpperCase();
}
const couponMessage = `Final coupon is ${normalizeCoupon(coupon)}`;
// Boolean type
function offerDiscount(orders) {
    return orders > 3;
}
// Any type
// Nie powinno się używać, za wyjątkiem migracji z JS do TS
let coupon2;
let coupon3;
// VOID type
let selectedTopping;
function selectTopping(topping) {
    selectedTopping = topping;
}
// onClick = () => setState(42);
// onClick = () => {
//     setState(42)
// };
// Never type
function orderError(error) {
    throw new Error(error);
}
// Null type
let coupon4 = 'pizza25';
function removeCoupon() {
    coupon4 = null;
}
// Union type
let pizzaSize = 'small';
function selectSize(size) {
    pizzaSize = size;
}
selectSize('large');
// Function type
function sumOrder(price, quantity) {
    return price * quantity;
}
let sumOrder2;
sumOrder2 = (x, y) => x * y;
// Optional arguments
let sumOrder3;
sumOrder3 = (x, y = 42) => x * y;
// Object type
const pizza = {
    name: 'pepperoni',
    price: 32,
    foo: 'example text',
    getName() {
        return pizza.name;
    }
};
// Array type
let sizes = ['small', 'medium', 'large'];
let toppings = ['pepperoni', 'tomato', 'bacon']; // Generic type
// Tuple type
let pizza2 = ['pepperoni', 32, true];
let pizzaSize2 = 'small';
const selectSize2 = (size) => {
    pizzaSize = size;
};
selectSize2('medium');
const pizza3 = {
    name: 'hawajska'
};
const serialized = JSON.stringify(pizza3);
function getNameFromJson(obj) {
    return JSON.parse(obj).name;
}
getNameFromJson(serialized);
let pizza4;
function createPizza(name, sizes) {
    return {
        name, sizes, price: 42
    };
}
pizza4 = createPizza('margarita', ['large']);
function createPizza5(name, sizes) {
    return {
        name, getAvailableSizes() {
            return sizes;
        }
    };
}
const pizza5 = createPizza5('margarita', ['small']);
// Class
class Pizza7 {
    name;
    toppings = [];
    constructor(name) {
        this.name = name;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}
const pizza7 = new Pizza7('hawajska');
pizza7.addTopping('cebula');
// Class: Access modifiers
class Pizza8 {
    name;
    toppings = [];
    constructor(name) {
        this.name = name;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}
const pizza8 = new Pizza8('wiejska');
pizza8.addTopping('ziemniaki');
// pizza8.name = '42' nie działa, bo name jest readonly
// Class: Setters nad Getters
class Sizes3 {
    sizes;
    constructor(sizes) {
        this.sizes = sizes;
    }
    get availableSizes() {
        return this.sizes;
    }
    set availableSizes(sizes) {
        this.sizes = sizes;
    }
}
const sizes3 = new Sizes3(['small', 'medium']);
const sizes4 = sizes3.availableSizes;
sizes3.availableSizes = ['large'];
// Class: Inheritance extends
class Pizza9 extends Sizes3 {
    name;
    sizes;
    constructor(name, sizes) {
        super(sizes);
        this.name = name;
        this.sizes = sizes;
    }
}
const pizza9 = new Pizza9('cztery sery', ['small']);
console.log(pizza9.name);
console.log(pizza9.sizes);
pizza9.availableSizes = ['large'];
class Sizes4 {
    sizes;
    availableSizes = [];
    constructor(sizes) {
        this.sizes = sizes;
    }
}
class Pizza10 extends Sizes4 {
    name;
    toppings = [];
    constructor(name, sizes) {
        super(sizes);
        this.name = name;
    }
    updateSizes(sizes) {
        this.sizes = sizes;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}
