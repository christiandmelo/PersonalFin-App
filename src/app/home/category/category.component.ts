import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories$ !: Observable<Categories>;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAll(10, 1);
  }

}
