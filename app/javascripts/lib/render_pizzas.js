import render from './render.js';
import pizzaToHTML from './pizza_to_html.js';
export default (pizzas)=> render(`<div id="pizzas">${pizzas.map(pizzaToHTML).join("")}</div>`);
