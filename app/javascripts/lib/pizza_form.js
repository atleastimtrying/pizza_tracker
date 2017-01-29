import render from './render.js';
import ingredients from './ingredients.js';
import ingredientToOption from './ingredient_to_option.js';

import { addPizza } from './pizza_management.js';

const options = ()=> ingredients.map(ingredientToOption).join('\n');

const formHTML = `
  <form>
    <h2>Create your own pizza</h2>
    <input name="pizza_name" placeholder="pizza name" />
    <select multiple name="pizza_ingredients" >
      ${options()}
    </select>
    <button class="submit_pizza">Add pizza</button>
  </form>
`;

const readInputs = function(event){
  event.preventDefault();
  let name = event.target.querySelector('input[name="pizza_name"]').value;
  let ingredients_select = event.target.querySelector('select[name="pizza_ingredients"]')
  let ingredients = [...ingredients_select.options].filter(option => option.selected).map(option => option.value);
  addPizza({ name, ingredients });
};

export default function(){
  render(formHTML,'form');
  document.querySelector('form').addEventListener('submit', readInputs);
}
