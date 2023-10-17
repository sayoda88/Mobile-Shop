import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { OrderMasterComponent } from './Order/order-master/order-master.component';
import { ProductDetailsComponent } from './Order/product-details/product-details.component';
import { ProductListComponent } from './Order/product-list/product-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CashierComponent } from './cashier/cashier.component';
import { HttpClientModule } from '@angular/common/http';
import { ReceiptComponent } from './receipt/receipt.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    MainLayoutComponent,
    OrderMasterComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UserLoginComponent,
    AdminLoginComponent,
    CashierComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
