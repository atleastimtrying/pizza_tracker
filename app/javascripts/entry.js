require("../stylesheets/application.scss");
import { getPizzas } from './lib/pizza_management.js';
import setupPizzaForm from './lib/pizza_form.js';

const start = function(){
  getPizzas();
  setupPizzaForm();
};

window.addEventListener('load', start);
