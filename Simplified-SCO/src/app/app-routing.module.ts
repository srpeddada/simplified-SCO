import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { IndexComponent } from './index/index.component';
import { ScanComponent } from './scan/scan.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
   { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "search", component: SearchComponent },
  { path: "scan", component: ScanComponent },
    { path: "cart", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
