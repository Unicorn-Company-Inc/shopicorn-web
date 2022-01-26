import { api } from "src/modules/axios"

export const mwstApi = {
  getMwst: async (price: number, percentage?: number): Promise<number> => {

    let url = `/mwst/${price}`
    if (percentage) {
      url += `/?percentage=${percentage}`
    }
    
    const response = await api.get<number>(url);
    return response.data;
  }
}