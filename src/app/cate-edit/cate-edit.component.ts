import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category/category';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cate-edit',
  templateUrl: './cate-edit.component.html',
  styleUrls: ['./cate-edit.component.css']
})
export class CateEditComponent implements OnInit {
  category: Category = {
    id: this.route.snapshot.params.id,
    name: '',
    
};

constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

ngOnInit() {
    this.getCategory()
}
getCategory() {
    this.productService.getCateID(this.category.id).subscribe(data => {
        this.category = data;
    })
}

onEditCategory() {
    
    this.productService.updateCate(this.category.id, this.category).subscribe(data => {
        this.router.navigate(['/cate/list'])
    
    });
  }
}
