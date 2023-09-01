import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import ProductsGrid from '../organisms/ProductsGrid';
import { useAppDispatch, useAppSelector } from '../../store';
import { loadProducts, selectStore } from '../../Reducers/Store/productsSlice';
const Store = () => {
    const [items, setItems] = useState([]);
    const dispatch = useAppDispatch();
    const store = useAppSelector(selectStore);
    // get products on load.
    useEffect(() => {
        dispatch(loadProducts());
    }, []);
    // Listen for changes in the store.products.data and update items accordingly
    useEffect(() => {
        setItems(store.products.data);
    }, [store.products.data]);
    return (_jsx("div", { children: _jsx(ProductsGrid, { items: items }) }));
};
export default Store;
