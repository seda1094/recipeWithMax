import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    startedEditing = new Subject<number>();
    ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Potato',105),
        new Ingredient('Oranges',50)
      ];
      getIngredients(){
          return this.ingredients
      }

      getIngredient(index: number){
          return this.ingredients[index];   
      }
      addItem(ingredient:Ingredient){
        this.ingredients.push(ingredient)
      }
      addIngedients(ingredients:Ingredient[]){
          for (const ingredient of ingredients) {
              this.addItem(ingredient);
          }
      }
      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index]=newIngredient;
      }
      deleteIngrediient(index: number){
          this.ingredients.splice(index,1)
      }
}