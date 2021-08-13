import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CateAddComponent } from './cate-add/cate-add.component';
import { CateEditComponent } from './cate-edit/cate-edit.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'product/:id/edit', component: ProductEditComponent },
 
  //cate
  {path: 'cate/add', component: CateAddComponent},
  {path: 'cate/:id/edit', component: CateEditComponent},
  {path: 'cate/list', component: CategoryComponent},

  // admin

  {path: 'admin', component: AdminComponent,
    children:[
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      {path: 'cate/list', component: CategoryComponent},
    ]
  },
  

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
