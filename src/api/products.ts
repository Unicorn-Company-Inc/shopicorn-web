import { api } from "src/modules/axios"
import { ProductEntity } from "./dto/product-entity";

export const productsApi = {
  getAll: async (): Promise<ProductEntity[]> => {
    
    const response = await api.get<ProductEntity[]>('products');
    return response.data;
  }
}