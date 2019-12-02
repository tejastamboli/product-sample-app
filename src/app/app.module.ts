import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InMemDataService } from "../_services/in-memory-data.service";
import { ProductService } from "../_services/product.service";
import { ProductlistComponent } from "./productlist/productlist.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [AppComponent, ProductlistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemDataService),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
