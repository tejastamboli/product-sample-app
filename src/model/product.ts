export class Product {
  price: string;
  latestReviewDate: string;
  domain: string;
  imageUrl: string;
  name: string;
  title: string;
  category: string;
  productId: string;
  createdAt: string;
  reviewCount: number;
  amazonUrl: string;
  topScores: TopScores[];
}

export class TopScores {
  topic: string;
  score: number;
}
