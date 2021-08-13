import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';
import { TypeProduct } from '../product/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products: TypeProduct[];
    constructor(private activedRoute: ActivatedRoute, private productService: ProductService) {
        this.activedRoute.queryParams.subscribe((params: Params) => {
            console.log(params);
        });
    }

    ngOnInit() { 
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts().subscribe(data => {
            this.products = data;
        });
    }
}
