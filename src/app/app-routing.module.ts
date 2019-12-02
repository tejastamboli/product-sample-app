import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductlistComponent } from "./productlist/productlist.component";

const routes: Routes = [
  {
    path: "product",
    component: ProductlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
