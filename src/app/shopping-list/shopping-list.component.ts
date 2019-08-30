import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[]
  constructor(private ingredintServ: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ingredintServ.getIngredients();
  }
  onEditItem(index:number){
    console.log(index);
    this.ingredintServ.startedEditing
    .next(index)
  } 
}
