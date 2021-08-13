import { Component, OnInit, Input } from '@angular/core';
import { TypeProduct } from './product';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    products: TypeProduct[];
    validForm = false;
    detail: TypeProduct;
    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.getProducts();
    }
    getProducts() {
        this.productService.getProducts().subscribe(data => {
            this.products = data;
        });
    }

    onHandleRemove(id: number) {
        this.productService.removeProduct(id).subscribe(data => {
            this.products = this.products.filter(item => item.id != data.id);
        });
    }
    onHandleChangeStatus() {
        // this.product.status = !this.product.status
    }
    onHandleChangeName(e: any) {
        // this.product.name = e.target.value
    }
    //   onDetail(product) {
    //     // console.log(product);
    //     // this.detail = product;
    //   }
}
