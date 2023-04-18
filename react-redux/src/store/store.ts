import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import formSlice from './reduser/formSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    form: formSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
