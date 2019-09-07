import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    //this is becouse we slice in GetRecipe method
    recipeChanged = new Subject<Recipe[]>();
    recipeSelected = new EventEmitter<Recipe[]>();

    recipes: Recipe[] = [
        new Recipe('Test Recipe', "My Desc", "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/recipes/tangy_skillet_chicken_recipe/650x350_tangy_skillet_chicken_recipe.jpg", [
            new Ingredient('Meat', 531),
            new Ingredient('Codo', 456),
            new Ingredient('Rove', 234),
            new Ingredient('Sini', 123),
        ]),
        new Recipe('Test New', "My Desc", "https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg", [
            new Ingredient('Vooyi', 213),
            new Ingredient('Codo', 456),
            new Ingredient('Rove', 234),
            new Ingredient('Sini', 123)
        ]),
        new Recipe('Test Old', "My Desc", "https://cdn-image.realsimple.com/sites/default/files/styles/video_image_1/public/easy-salsa-recipe-overlay.jpg?itok=Iw1jCYcH", [
            new Ingredient('Meat', 531),
            new Ingredient('Potat', 425),
            new Ingredient('Heeri', 355),
            new Ingredient('Vooyi', 213),
        ]),
        new Recipe('Test After', "My Desc", "https://media2.s-nbcnews.com/j/newscms/2019_31/1467587/henry-firth-ian-theasby-today-main-190802-01_9c3346d7dd922c10e8c0ba1a385f7b4d.today-front-large.jpg", [
            new Ingredient('Codo', 456),
            new Ingredient('Sini', 123),
        ]),
    ];
    constructor(private sl: ShoppingListService) { }


    setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice())
    }
  getRecipes() {    
    return this.recipes.slice();
  }


    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.sl.addIngedients(ingredients)
    }

    getRecipeId(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1)
    }
}