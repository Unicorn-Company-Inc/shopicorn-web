import { StockEntity } from "./stock-entity";

export interface DetailedProductEntity {
  id: number;
  name: string;
  price: number;
  currency: string;
  color: string;
  category: string;
  description: string;
  manufacturer: string;
  releaseDate: string;
  stars: number;
  stock: StockEntity;
}
