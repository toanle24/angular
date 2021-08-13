import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category/category';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cate-add',
  templateUrl: './cate-add.component.html',
  styleUrls: ['./cate-add.component.css']
})
export class CateAddComponent implements OnInit {

  constructor( private productService: ProductService,private router: Router) { }
  category: Category={
    id: 0,
    name: '',
  }
  ngOnInit(): void {
  }

  onAddCate() {
    this.productService.addCate(this.category).subscribe(data => {
      alert('Bạn đã cập nhật thành công');
      this.router.navigateByUrl('/home');
    });
  }

}
