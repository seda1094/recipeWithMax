import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: true}) 
  slForm: NgForm
  subscription: Subscription; 
  editMode = false; 
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingServ:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingServ.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingServ
        .getIngredient(index)
        console.log(this.editedItem);
        
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingServ.updateIngredient(this.editedItemIndex,newIngredient)
    }
    else{
      this.shoppingServ.addItem(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shoppingServ.deleteIngrediient(this.editedItemIndex)
    this.onClear()
  }
}
