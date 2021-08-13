import { Injectable } from '@angular/core';
import { TypeProduct } from './product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category/category';
// import { dataFake } from './data-fake';

@Injectable()
export class ProductService {
    // products: TypeProduct[] = dataFake;
    API: string = 'https://60f0570bf587af00179d3ebb.mockapi.io/product';
    APII: string = 'https://60f0570bf587af00179d3ebb.mockapi.io/category';

    constructor(private http: HttpClient) { }
    getProducts(): Observable<TypeProduct[]> {
        return this.http.get<TypeProduct[]>(this.API);
        // return this.products;
    }
    get(id : number): Observable<TypeProduct> {
        return this.http.get<TypeProduct>(`${this.API}/${id}`);
    }
    addProduct(item: TypeProduct): Observable<TypeProduct> {
        return this.http.post<TypeProduct>(this.API, item);
    }
    removeProduct(id: number): Observable<TypeProduct> {
        return this.http.delete<TypeProduct>(`${this.API}/${id}`);
    }
    updateProduct(id : number, item: TypeProduct): Observable<TypeProduct> {
        return this.http.put<TypeProduct>(`${this.API}/${id}`, item);
    }

    // cate

    addCate(item: Category): Observable<Category> {
        return this.http.post<Category>(this.APII, item);
    }


    getCate(): Observable<Category[]> {
        return this.http.get<Category[]>(this.APII);
    }
    getCateID(id : number): Observable<Category> {
        return this.http.get<Category>(`${this.APII}/${id}`);
    }

    removeCate(id: number): Observable<Category> {
        return this.http.delete<Category>(`${this.APII}/${id}`);
    }

    updateCate(id : number, item: Category): Observable<Category> {
        return this.http.put<Category>(`${this.APII}/${id}`, item);
    }


    getCategory() {
        
    }
}
