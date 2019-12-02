import { Component, OnInit } from "@angular/core";
import {MatCardModule} from '@angular/material/card';

import { ProductService } from "../../_services/product.service";
import { Product } from "../../model/product";

@Component({
  selector: "app-productlist",
  templateUrl: "./productlist.component.html",
  styleUrls: ["./productlist.component.scss"],
  providers: [ProductService]
})
export class ProductlistComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe(products => this.productList = products);
  }
}
