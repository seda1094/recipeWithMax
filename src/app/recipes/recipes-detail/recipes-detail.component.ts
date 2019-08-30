import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})

export class RecipesDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;
  constructor(private recSer: RecipeService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params)=> {
        this.id = +params['id'];
        this.recipe = this.recSer.getRecipeId(this.id)
      }
    )
  }
  addToShoppingList(){
    this.recSer.addIngredientsToShoppingList(this.recipe.ingredients)
    
  }
  onRecipeEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }
  onRecipeDelete(){
    this.recSer.deleteRecipe(this.id);
    this.router.navigate(['/recipe'])
  }
}
