import { api } from "src/modules/axios"
import { DetailedProductEntity } from "./dto/detailed-product-entity";
import { ProductEntity } from "./dto/product-entity";

export const productsApi = {
  getAll: async (): Promise<ProductEntity[]> => {
    const response = await api.get<ProductEntity[]>('products');
    return response.data;
  },
  get: async (id: number): Promise<ProductEntity> => {
    const response = await api.get<ProductEntity>(`products/${id}`);
    return response.data;
  },
  getDetails: async (id: number, currency?: string): Promise<DetailedProductEntity> => {
    let url = `/products/${id}/details`
    if (currency) {
      url += `/?currency=${currency}`
    }

    const response = await api.get<DetailedProductEntity>(url);
    return response.data;
  }
}