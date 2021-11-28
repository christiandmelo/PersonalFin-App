import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-editing',
  templateUrl: './category-editing.component.html',
  styleUrls: ['./category-editing.component.css']
})
export class CategoryEditingComponent implements OnInit {
  categoryForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      shortName: ['', [
        Validators.required
      ]]
    });
  }

  save(){
    this.categoryService
        .save(
          this.categoryForm.get('name')?.value,
          this.categoryForm.get('shortName')?.value
        )
        .subscribe(()=>{
          this.snackBar.open('Category saved successfully', 'ok', {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        },() => {
          this.snackBar.open('Error saving', 'ok', {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        })
  }

}
