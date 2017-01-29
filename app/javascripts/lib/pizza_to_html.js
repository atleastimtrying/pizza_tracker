import ingredientToLi from './ingredient_to_li.js';
export default (pizza)=> `
  <div class="pizza">
    <h2>${ pizza.name }</h2>
    <ul>${ pizza.ingredients.map(ingredientToLi).join("") }</ul>
  </div>
`;
