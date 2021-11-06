import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category$ !: Observable<Category>;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.category$ = this.categoryService.getAll(10, 1);
  }

}
