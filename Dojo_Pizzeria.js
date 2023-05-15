var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log("sandwich:", sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log("sandwich 1:", s1);

function pizzaOven (crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzerella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("stuffed crust", "BBQ", ["mozzarella", "feta"], ["ham", "mushrooms", "pineapple"]);
var pizza4 = pizzaOven("thin crust", "robust tomato sauce", ["mozzarella"], ["pepperoni", "olives", "sausage", "onions"]);

console.log("pizza1:", pizza1);
console.log("pizza2:", pizza2);
console.log("pizza3:", pizza3);
console.log("pizza4:", pizza4);

function randomPizza() {
    var result = {};
    
    var pizza = {
        crustType: ["deep dish", "hand tossed", "stuffed crust", "thin crust"],
        sauceType: ["traditional", "marinara", "BBQ", "robust tomato sauce"],
        cheese: ["mozzerella", "feta", "cheddar", "blue cheese", "gouda", "American"],
        toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions", "pineapple"]
    };

    var numCheeses = Math.floor(Math.random()*pizza.cheese.length);
    var numToppings = Math.floor(Math.random()*pizza.toppings.length);

    result.crustType = pizza.crustType[Math.floor(pizza.crustType.length*Math.random())];
    result.sauceType = pizza.sauceType[Math.floor(pizza.sauceType.length*Math.random())];
    result.cheese = [pizza.cheese[Math.floor(pizza.cheese.length*Math.random())]];
    result.toppings = [pizza.toppings[Math.floor(pizza.toppings.length*Math.random())]];

    if (numCheeses > 0 || numToppings > 0){
        for(var i = 1; i< numCheeses; i++){
            result.cheese = result.cheese.concat([pizza.cheese[Math.floor(pizza.cheese.length*Math.random())]]);
        }
        for(var i = 1; i < numToppings; i++){
            result.toppings = result.toppings.concat([pizza.toppings[Math.floor(pizza.toppings.length*Math.random())]]);
        }
    }

    return result;
}

console.log("random pizza:", randomPizza());