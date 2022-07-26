import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { ScanComponent } from './scan/scan.component';
import { LoginComponent } from './login/login.component';
import { ZXingScannerModule } from "@zxing/ngx-scanner";

 
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    CartComponent,
    ScanComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
