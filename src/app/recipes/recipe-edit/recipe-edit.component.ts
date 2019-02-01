import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditMode: boolean = false;
  recipeForm: FormGroup;


  constructor(private router: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.router.params.
      subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.isEditMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  initForm() {
    let recipeName = '';
    let recipeUrl = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if(this.isEditMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeUrl = recipe.imagePath;
      recipeDesc = recipe.description;
      if(recipe['ingredients']) {
        for(let ingre of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingre.name, Validators.required),
              'amount': new FormControl(ingre.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeUrl, Validators.required),
      'description': new FormControl(recipeDesc, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup(
        {
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }
      )
    )
  }

  onDeleteIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup(
        {
          'name': new FormControl(),
          'amount': new FormControl()
        }
      )
    )
  }

  onSubmit() {
    console.log(this.recipeForm.value)
  }

}
