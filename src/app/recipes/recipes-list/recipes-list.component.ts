import { Subscription } from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  subscription: Subscription;
  recipes: Recipe[] 
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
    // setInterval(this.ff,10)
    
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  ff(){
    console.log(this.recipes)
  }

}
