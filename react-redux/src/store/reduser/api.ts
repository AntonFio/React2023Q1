import { createSlice } from '@reduxjs/toolkit';
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

interface IState {
  createdParam: IParam[];
}

const initialState: IState = {
  createdParam: [],
};

export const createdParamSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addParam: (state, { payload }) => {
      state.createdParam.push(payload);
    },
  },
});

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
export const { addParam } = createdParamSlice.actions;
export default createdParamSlice.reducer;
