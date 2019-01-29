import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "./shopping.service";

@Injectable()
export class RecipeService {
    
    recipeSelected: EventEmitter<Recipe> = new EventEmitter();

    constructor(private shopListService: ShoppingService) {}
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('Bread', 2), new Ingredient('Onion', 9)]),
        new Recipe('Another Recipe', 'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('Pasta', 4), new Ingredient('Potato', 12)])
    ];
    
    getRecipes(): Recipe[] {
        return this.recipes.slice()
    }
    
    addIngredientsToShopping(ingredients: Ingredient[]) {
      this.shopListService.addIngridents(ingredients)
    }
    
}
