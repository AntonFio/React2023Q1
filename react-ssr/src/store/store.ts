import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from './reduser/api';
import createdParamReduser from './reduser/api';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import formSlice from './reduser/formSlice';
import apiAsync from './reduser/apiAsync';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    form: formSlice,
    apiAsync: apiAsync,
    createdParam: createdParamReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch);
