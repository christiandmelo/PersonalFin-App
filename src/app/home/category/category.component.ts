import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResultCategories, Category } from './category';
import { CategoryService } from './category.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, AfterViewInit  {
  categoriesData !: ApiResultCategories;

  displayedColumns: string[] = ['shortName', 'name', 'actions'];
  dataSource !: MatTableDataSource<Category>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
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

  //#region Methods of get
  getCategoriesAndPutOnTable(page: number){
    this.categoryService
      .getAll(page)
      .subscribe((dataCategories) => {
        this.categoriesData = dataCategories;
        this.dataSource = new MatTableDataSource<Category>(dataCategories.data);
      });
  }
  //#endregion
}
