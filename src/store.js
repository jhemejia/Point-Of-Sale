import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from './Reducers/Store/productsSlice';
// ...
const storeReducer = combineReducers({
    products: productsSlice.reducer
});
export const store = configureStore({
    reducer: {
        store: storeReducer
    },
});
// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
