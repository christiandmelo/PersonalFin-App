import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ApiResultCategories } from './category';
import { CategoryService } from './category.service';
import { CategoryEditingComponent } from './category-editing/category-editing.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit  {
  page : number = 0;
  type: number = 1;
  categories$ !: Observable<ApiResultCategories>;

  displayedColumns: string[] = ['Icon', 'Name', 'Color', 'Actions'];

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories(0);
  }

  editionCategoryDialog(id: number) {
    const dialogRef = this.dialog.open(CategoryEditingComponent, { data: {id: id, type: this.type} });

    dialogRef.afterClosed().subscribe(result => {
      if(result != "")
        this.getCategories(this.page);
    });
  }

  //#region Methods of 
  setTypeCategory(type: number){
    this.type = type;
    this.getCategories(0);
  }
  //#endregion

  //#region Methods of get
  getCategories(page: number){
    this.categories$ = this.categoryService.getAll(page, this.type)
  }

  previousPage(){
    this.page--;
    this.getCategories(this.page);
  }

  nextPage(){
    this.page++;
    this.getCategories(this.page);
  }
  //#endregion
}
