import request from 'superagent';
import renderPizzas from './render_pizzas.js';

const loadSeeds = function(){
  request
    .get('/pizzas.json')
    .end(function(err, response){
      if(err){
        alert(err);
      }else{
        let pizzas = response.body.pizzas;
        localStorage.setItem('pizzas', JSON.stringify(pizzas));
        renderPizzas(pizzas);
      }
    });
};

export const getPizzas = function(){
  let localPizzas = localStorage.getItem('pizzas');
  if(localPizzas){
    renderPizzas(JSON.parse(localPizzas));
  }else{
    loadSeeds();
  }
};

export const addPizza = function(pizza){
  let pizzas = JSON.parse(localStorage.getItem('pizzas'));
  pizzas.push(pizza);
  localStorage.setItem('pizzas', JSON.stringify(pizzas));
  renderPizzas(pizzas);
};
