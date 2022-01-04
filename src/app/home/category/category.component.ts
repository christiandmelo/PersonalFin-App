import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResultCategories, Category } from './category';
import { CategoryService } from './category.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { CategoryEditingComponent } from './category-editing/category-editing.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, AfterViewInit  {
  totalRows : number = 0;
  isLoadingResults = true;
  type: number = 1;
  categoriesData !: ApiResultCategories;

  displayedColumns: string[] = ['name', 'icon', 'color', 'actions'];
  dataSource !: MatTableDataSource<Category>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getTotalRows();
    this.getCategoriesAndPutOnTable(0);
  }

  ngAfterViewInit() {
    this.paginator.page
        .pipe(
            tap(() => this.getCategoriesAndPutOnTable(this.paginator.pageIndex))
        )
        .subscribe();
  }

  editionCategoryDialog(id: number) {
    const dialogRef = this.dialog.open(CategoryEditingComponent, { data: {id: id, type: this.type} });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result != "")
      this.getTotalRows();
        this.getCategoriesAndPutOnTable(this.paginator.pageIndex);
    });
  }

  //#region Methods of 
  setTypeCategory(type: number){
    this.type = type;

    this.getTotalRows();
    this.getCategoriesAndPutOnTable(0);
  }
  //#endregion

  //#region Methods of get
  getTotalRows(){
    this.categoryService
    .getTotalRows(this.type)
    .subscribe((rows) => {
      this.totalRows = rows;
    });
  }

  getCategoriesAndPutOnTable(page: number){
    this.isLoadingResults = true;
    this.categoryService
      .getAll(page, this.type)
      .subscribe((dataCategories) => {
        this.categoriesData = dataCategories;
        this.dataSource = new MatTableDataSource<Category>(dataCategories.data);
        this.isLoadingResults = false;
      });
  }
  //#endregion
}
