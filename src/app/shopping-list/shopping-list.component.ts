import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shopListService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shopListService.getIngredients();
    this.shopListService.ingredientsAddedEvent.subscribe(
      (ing: Ingredient[]) => this.ingredients = ing
    );
  }

  onEditItem(index: number) {
    this.shopListService.editingIngridient.next(index);
  }

}
