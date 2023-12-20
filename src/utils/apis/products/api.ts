import {
  AddProductSchema,
  EditProductSchema,
  Product,
  ResponseProducts,
} from "./types";
import axiosWithConfig from "../axiosWithConfig";
import { Response, Request, ResponsePagination } from "@/utils/types/api";

export const getProducts = async (params?: Request) => {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];

      let key: keyof typeof params;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = queryParams.join("&");
    }

    const url = query ? `/product/search?${query}` : `/products`;

    const response = await axiosWithConfig.get(url);

    return response.data as ResponsePagination<ResponseProducts[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getCategoryProducts = async (category: string, limit: number) => {
  try {
    const response = await axiosWithConfig.get(
      `/product/search?category=${category}&limit=${limit}`
    );

    return response.data as ResponsePagination;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailProduct = async (product_id: number) => {
  try {
    const response = await axiosWithConfig.get(`/product/${product_id}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addProduct = async (body: AddProductSchema) => {
  try {
    const response = await axiosWithConfig.post(`/product`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const editProduct = async (
  product_id: number,
  body: EditProductSchema
) => {
  try {
    const response = await axiosWithConfig.patch(
      `/product/${product_id}`,
      body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteProduct = async (product_id: number) => {
  try {
    const response = await axiosWithConfig.delete(`/product/${product_id}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
