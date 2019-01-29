import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  // @Output() recipeSelectionEvent = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.recipes =  this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.route.navigate(['new'], {relativeTo: this.router})
  }

}
