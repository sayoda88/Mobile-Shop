import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderMasterComponent } from './Order/order-master/order-master.component';
import { ProductDetailsComponent } from './Order/product-details/product-details.component';
import { ProductListComponent } from './Order/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CashierComponent } from './cashier/cashier.component';
import { ReceiptComponent } from './receipt/receipt.component';
const routes: Routes = [
  {path:'', redirectTo:'/Home',pathMatch:'full'} ,//defult path
  {path:'',component:MainLayoutComponent,children:[  
    {path:'Home',component:HomeComponent},
    {path:'Products', component:ProductListComponent},
    {path:'Products/:pid', component:ProductDetailsComponent},
    {path: 'Order',component:CashierComponent},
    {path: 'receipt',component:ReceiptComponent}

  ]},
  {path:"Login/user",component:UserLoginComponent},
  {path:"Login/admin",component:AdminLoginComponent},
  // {path:'**',component:NotFoundComponent},//wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
