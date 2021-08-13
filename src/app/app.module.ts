import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { CateAddComponent } from './cate-add/cate-add.component';
import { CateEditComponent } from './cate-edit/cate-edit.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductAddComponent,
    HomeComponent,
    NotFoundComponent,
    ProductEditComponent,
    HeaderComponent,
    NavComponent,
    CategoryComponent,
    CateAddComponent,
    CateEditComponent,
    AdminComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
