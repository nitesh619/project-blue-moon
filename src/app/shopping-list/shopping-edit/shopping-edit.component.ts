import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('inputName') inputName: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngridient(amount: HTMLInputElement) {
    console.log(amount)
    const inAmount = +amount.value;
    const inName = this.inputName.nativeElement.value;
    
    const ingredient = new Ingredient(inName, inAmount);
    this.ingredientAdded.emit(ingredient);
  }

}
