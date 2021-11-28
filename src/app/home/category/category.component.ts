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
  categoriesData !: ApiResultCategories;

  displayedColumns: string[] = ['shortName', 'name', 'actions'];
  dataSource !: MatTableDataSource<Category>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService
      .getTotalRows()
      .subscribe((rows) => {
        this.totalRows = rows;
      });

    this.getCategoriesAndPutOnTable(0);
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.paginator.page
        .pipe(
            tap(() => this.getCategoriesAndPutOnTable(this.paginator.pageIndex))
        )
        .subscribe();
  }

  newCategoryDialog() {
    const dialogRef = this.dialog.open(CategoryEditingComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //#region Methods of get
  getCategoriesAndPutOnTable(page: number){
    this.isLoadingResults = true;
    this.categoryService
      .getAll(page)
      .subscribe((dataCategories) => {
        this.categoriesData = dataCategories;
        this.dataSource = new MatTableDataSource<Category>(dataCategories.data);
        this.isLoadingResults = false;
      });
  }
  //#endregion
}
