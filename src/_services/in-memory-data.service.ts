import { InMemoryDbService } from "angular-in-memory-web-api";
import { Product } from "../model/product";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        price: "₹ 1,799.00",
        latestReviewDate: "2018-10-21T00:00:00.000Z",
        domain: "amazon.in",
        imageUrl:
          "https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg",
        name: "Bluetooth Speakers",
        title: "JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)",
        category: "Bluetooth Speakers",
        productId: "ABCD1234",
        createdAt: "2018-08-31T09:36:08.448Z",
        reviewCount: 3013,
        amazonUrl:"http://icons.iconarchive.com/icons/bokehlicia/pacifica/128/amazon-icon.png",
        topScores: [
          { topic: "Sound Quality", score: 4.6 },
          { topic: "Bass", score: 4.2 },
          { topic: "Design and Build", score: 4.2 },
          { topic: "Battery Backup", score: 4.2 }
        ]
      }
    ];

    return { products };
  }
}
