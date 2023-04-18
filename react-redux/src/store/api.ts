import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPosts: builder.query<any, string>({
      query: () => '/products',
    }),
    getPost: builder.query({
      query: () => `/products/search?q=${1}`,
    }),
  }),
});

// `https://dummyjson.com/products/search?q=${value}`;
export const { useGetPostsQuery } = apiSlice;
