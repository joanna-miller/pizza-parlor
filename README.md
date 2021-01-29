# _Pizza Parlor_

#### _Build a custom pizza!_

#### By _**Jo Miller**_
---
## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
---

## Description

_Build a custom pizza from the size and topping choices provided and get the price of your pizza returned to you!_

---
## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to top level of the directory_
* _Open index.html in your browser_
---

## Specifications
```
Describe: Pizza()
Test: Pizza Constructor should have price, size, and toppings keys.
Expect: (let pizza = new Pizza()).toEqual(pizza{price:, size:, toppings:})
Test: Pizza Constructor should hold values for each key.
Expect: (let pizza = new Pizza(12, "small", [2, 2])).toEqual(pizza{price: 12, size: "small", toppings: [2, 2]})

Describe: Pizza.prototype.priceCalc()
Test: Calculate pizza cost based on size "small".
Expect: (pizza.priceCalc()).toEqual(pizza {price: 12, size, "small", toppings: []})

Test: Calculate pizza cost based on size "medium".
Expect: (pizza.priceCalc()).toEqual(pizza {price: 15, size, "medium", toppings: []})

Test: Calculate pizza cost based on size "large".
Expect: (pizza.priceCalc()).toEqual(pizza {price: 18, size, "large", toppings: []})

Describe: Pizza.prototype.addToppings()
Test: Calculate pizza cost based on 1 added topping.
Expect: (pizza.addToppings()).toEqual(pizza {price: 14, size: "small", toppings: [2]})

Test: Calculate pizza cost based on multiple added toppings.
Expect (pizza.addToppings()).toEqual(pizza {price: 19, size: "small", toppings: [2, 2, 3]})

Describe: Order()
Test: Store a pizza ordered created by user.
Expect (let order = new Order()).toEqual(order{pizzas:{}})

Describe: Order.prototype.addToOrder()
Test: Add pizza to order object.
Expect: (order.addToOrder(pizza)).toEqual(order{pizzas:{14}})
```
---

## License

[MIT](LICENSE.txt)

---
## Contact Information

_Jo Miller: joannamiller@gmail.com_
