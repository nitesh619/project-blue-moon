import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { NgForm } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') myForm: NgForm;
  subs: Subscription;
  editIndex: number;
  editItem: Ingredient;
  editMode: boolean = false;

  constructor(private shopService: ShoppingService) { }

  ngOnInit() {
    this.subs = this.shopService.editingIngridient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editItem = this.shopService.getIngredient(index);
        this.myForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    )
  }

  addIngridient(form: NgForm) {
    const value = form.value;
    console.log(value)

    const ingredient = new Ingredient(value.name, +value.amount);
    this.shopService.addIngrident(ingredient);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
