import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IParam {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}
export interface IArrIparam {
  param: Array<IParam>;
  loading: boolean;
  error: string | null;
}

export interface IResponse {
  limit: number;
  skip: number;
  total: number;
  products: IParam[];
}

export const searchApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProduct: builder.query<IResponse, string>({
      query: (value) => `/products/search?q=${value}`,
    }),
  }),
});

export const { useGetProductQuery } = searchApi;
