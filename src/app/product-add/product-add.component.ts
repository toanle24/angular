import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TypeProduct } from '../product/product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    // @Output() newProductEvent = new EventEmitter<TypeProduct>();

    product: TypeProduct = {
        id: 0,
        name: '',
        price: 0,
        img: '',
        status: true
    };
    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit() { }
    onAddProduct() {
        // this.newProductEvent.emit(this.product);
        this.productService.addProduct(this.product).subscribe(data => {
            this.router.navigate(['/product'])
            console.log(data);
        });
    }
}
