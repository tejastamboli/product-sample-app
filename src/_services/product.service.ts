import { Injectable } from "@angular/core";
import { Product } from "../model/product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable()
export class ProductService {
  private productURL = "api/products";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productURL)
      .pipe(catchError(this.handleError<Product[]>("getProducts", [])));
  }

  getProduct(productId: string): Observable<Product> {
    const url = `${this.productURL}/${productId}`;
    return this.http
      .get<Product>(url)
      .pipe(
        catchError(this.handleError<Product>(`getProduct by id: ${productId}`))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
