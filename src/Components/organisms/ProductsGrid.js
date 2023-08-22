import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../molecules/ProductCard';
const ProductsGrid = (props) => {
    /*   const productCategories = [
        "Jackets & Coats",
        "Hoodies",
        "T-shirts & Vests",
        "Shirts",
        "Blazers & Suits",
        "Jeans",
        "Trousers",
        "Shorts",
        "Underwear"
      ]; */
    const [sort, setSort] = useState('recommended');
    const [categories, setCategories] = useState([]);
    const getProductCategories = (items) => {
        const categoriesSet = new Set();
        if (items) {
            items.filter(item => {
                if (!categoriesSet.has(item.category.name)) {
                    categoriesSet.add(item.category.name);
                    return true;
                }
                return false;
            });
            const categories = Array.from(categoriesSet);
            return categories;
        }
        return [];
    };
    useEffect(() => {
        setCategories(getProductCategories(props.items));
    }, [props.items]);
    return (_jsx("section", { className: "bg-white dark:bg-gray-900 flex mx-auto w-full", children: _jsx("div", { className: " px-6 py-8 mx-auto flex w-full", children: _jsxs("div", { className: "lg:flex lg:-mx-2", children: [_jsx("div", { className: "space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4", children: categories?.map((category, index) => {
                            return (_jsx(Link, { to: "#", className: "block font-medium text-gray-500 dark:text-gray-300 hover:underline", children: category }, index));
                        }) }), _jsxs("div", { className: "mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ", children: [_jsxs("div", { className: "flex items-center justify-between text-sm tracking-widest uppercase ", children: [_jsxs("p", { className: "text-gray-500 dark:text-gray-300", children: [props.items?.length, " Items"] }), _jsxs("div", { className: "flex items-center", children: [_jsx("p", { className: "text-gray-500 dark:text-gray-300", children: "Sort" }), _jsxs("select", { value: sort, onChange: e => setSort(e.target.value), className: "font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none", children: [_jsx("option", { value: "recommended", children: "Recommended" }), _jsx("option", { value: "price", children: "Price" })] })] })] }), _jsx("div", { className: "grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4", children: props.items?.map((item, index) => {
                                    return (_createElement(ProductCard, { ...item, key: index }));
                                }) || '' })] })] }) }) }));
};
export default ProductsGrid;
