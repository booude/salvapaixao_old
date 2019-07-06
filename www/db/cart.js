import produtos from "./produtos.js";
console.log("produtos é", produtos);
export var cart = [];

export function addToCart(item) {
  cart.push(item);
}
