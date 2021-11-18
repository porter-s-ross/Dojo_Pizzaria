function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizzaDeepDish = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
var pizzaVeggie = pizzaOven("hand tossed", "marinara", ["mozzarella]", "feta"], ["mushrooms", "olives", "onions"])
var pizzaDelicioso = pizzaOven("cheesy stufffed", ["pesto","alfredo"], "goat", ["arugula", "balsamic"])
var pizzaMeatLover = pizzaOven("tavern style", "marinera", "mozzarella", ["pepperoni", "sausage", "salami", "chicken", "bacon"])


function pizzaPicker(pizzaDeepDish, pizzaVeggie, pizzaDelicioso,pizzaMeatLover){
    return Math.floor(Math.random(pizzaPicker));
}

pizzaPicker();