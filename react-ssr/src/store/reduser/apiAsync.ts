import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IParam {
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
interface IArrIparam {
  param: Array<IParam>;
  loading: boolean;
  error: string | null;
}

const initianalParam: IArrIparam = {
  param: [],
  loading: false,
  error: null,
};

export const getParam = createAsyncThunk<IParam[], { rejectValue: string }>(
  'param/getParam',
  async function (_, { dispatch }) {
    const result = await fetch(`https://dummyjson.com/products`);
    const data = await result.json();
    dispatch(getParam(data));
    return data;
  }
);

export const paramSlise = createSlice({
  name: 'param',
  initialState: initianalParam,
  reducers: {
    setParam: (state, action) => {
      state.param = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getParam.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getParam.fulfilled, (state, action) => {
        state.param = action.payload;
        state.loading = false;
      });
  },
});

export const { setParam } = paramSlise.actions;

export default paramSlise.reducer;
