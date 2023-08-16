import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../molecules/ProductCard';
import axios from 'axios';
import { Item } from '../../Types/StoreTypes';


const ProductsGrid = () => {
  const productCategories = [
    "Jackets & Coats",
    "Hoodies",
    "T-shirts & Vests",
    "Shirts",
    "Blazers & Suits",
    "Jeans",
    "Trousers",
    "Shorts",
    "Underwear"
  ];
  
  const [ items, setItems ] = useState<Item[]>([])
  const [ sort, setSort ] = useState('recommended')
  // get products on load.
  useEffect(()=>{
      axios.get('https://api.escuelajs.co/api/v1/products')
    .then((res)=>{  
        setItems(res.data)
    })
    .catch(error=>console.log("Axios Error:", error))
  },[])

  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto flex max-w-full ">
            <div className="lg:flex lg:-mx-2">
                <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                  {productCategories.map((category,index)=>{
                    return(
                    <Link to="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline" key={index}>{category}</Link>
                    )
                  })}
                </div>

                <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-gray-500 dark:text-gray-300">{items.length} Items</p>
                        <div className="flex items-center">
                            <p className="text-gray-500 dark:text-gray-300">Sort</p>
                            <select value={sort} onChange={e=>setSort(e.target.value)} className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                <option value="recommended">Recommended</option>
                                <option value="price">Price</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                       {items.map((item: Item, index:number)=>{
                         return (
                           <ProductCard {...item} key={index}/>
                           )
                       }) || '' }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductsGrid