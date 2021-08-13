import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.productService.getCate().subscribe(data => {
        this.category = data;
    });
}

cateRemove(id: number) {
    this.productService.removeCate(id).subscribe(data => {
        this.category = this.category.filter(item => item.id != data.id);
    });
}

}
