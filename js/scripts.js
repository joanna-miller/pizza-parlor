// Business Logic for Order ---------
function Order() {
  this.pizzas = {};
  this.currentId = 0;
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.addToOrder = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
} 

Order.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
}

// Business Logic for Pizza ---------

function Pizza(price, size, toppings) {
  this.price = price;
  this.size = size;
  this.toppings = toppings;
}

let pizza = new Pizza(0, "small", [])

Pizza.prototype.priceCalc = function () {
  if (this.size === "small") {
    this.price = 12;
  } else if (this.size === "medium") {
    this.price = 15;
  } else if (this.size === "large") {
    this.price = 18;
  }
}

Pizza.prototype.addToppings = function () {
  let sum = 0;
  this.toppings.forEach(function(topping) {
    sum += topping;
  });
  this.price += sum;
}

//User Interface Logic ---------
let order = new Order();

/* function displayPizzaDetails(orderToDisplay) {
  let pizzaList = $("ul#cart");
  let htmlForPizzaInfo = "";
  Object.keys(orderToDisplay).forEach(function(key) {
    const pizza = orderToDisplay.findPizza(key);
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + "Pizza #" + pizza.id + ": " + pizza.size + "#" + "toppings - $" + pizza.price + "</li>"
  });
  pizzaList.html(htmlForPizzaInfo);
}; */

$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    const pizzaToppings = [];
    const pizzaSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function(){
      pizzaToppings.push(parseInt($(this).val()));
    }); 
    let pizza = new Pizza(0, pizzaSize, pizzaToppings);
    pizza.priceCalc();
    pizza.addToppings();
    $("#pizza-price").text(pizza.price);
    $("#result").show();
  })
});
 