import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('inputName') inputName: ElementRef;

  constructor(private shopService: ShoppingService) { }

  ngOnInit() {
  }

  addIngridient(amount: HTMLInputElement) {
    console.log(amount)
    const inAmount = +amount.value;
    const inName = this.inputName.nativeElement.value;
    
    const ingredient = new Ingredient(inName, inAmount);
    this.shopService.addIngrident(ingredient);
  }

}
