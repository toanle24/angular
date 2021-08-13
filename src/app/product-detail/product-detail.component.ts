import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { TypeProduct } from '../product/product';
@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product: TypeProduct;
    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.getProduct();
    }
    getProduct() {
        this.activatedRoute.params.subscribe(params => {
            this.productService.get(params.id).subscribe(data => {
                this.product = data;
            });
        });
    }
}
