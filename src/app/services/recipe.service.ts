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
        'http://www.stickpng.com/assets/images/58824b33e81acb96424ffab9.png',
        [new Ingredient('Bread', 2), new Ingredient('Onion', 9)]),
        new Recipe('Another Recipe', 'This is simply a test',
        'https://www.pngarts.com/files/3/Pizza-PNG-Image.png',
        [new Ingredient('Pasta', 4), new Ingredient('Potato', 12)])
    ];
    
    getRecipes(): Recipe[] {
        return this.recipes.slice()
    }

    getRecipeById(index: number): Recipe {
       return this.recipes[index];
    }
    
    addIngredientsToShopping(ingredients: Ingredient[]) {
      this.shopListService.addIngridents(ingredients)
    }
    
}
