import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingService {
    
    ingredientsAddedEvent: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    
    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }
    
    addIngrident(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsAddedEvent.emit(this.ingredients.slice());
    }
    addIngridents(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsAddedEvent.emit(this.ingredients.slice());
    }

}