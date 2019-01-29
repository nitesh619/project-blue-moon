import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
     private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.params.
      subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipeById(this.id);
        }
      );
  }

  onAddToShoppingList() {
    console.log("here")
    this.recipeService.addIngredientsToShopping(this.recipe.ingredients);
  }

  // onEditRecipe() {
  //   this.route.navigate(['edit'], {relativeTo: this.router})
  // }

}
