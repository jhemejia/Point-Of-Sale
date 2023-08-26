import { useEffect, useState } from 'react';
import ProductCard from '../molecules/ProductCard';
import { Item } from '../../Types/StoreTypes';

interface ProductsGridProps {
  items: Item[] | undefined
}

const ProductsGrid = (props:ProductsGridProps) => {

  const [ sort, setSort ] = useState('recommended')
  const [ categories, setCategories ] = useState<any[]|undefined>([])
  const [ selectedCategory, setSelectedCategory ] = useState()

  const getProductCategories = (items: Item[] | undefined) => {
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
  
      return categories
    }
  
    return [];
  };
  

 useEffect(()=>{
  setCategories(getProductCategories(props.items))
 },[props.items])

  return (
    <section className="bg-white dark:bg-gray-900 flex mx-auto w-full">
        <div className=" px-6 py-8 mx-auto flex w-full">
            <div className="lg:flex lg:-mx-2">
                <div className="flex flex-col space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                  {categories?.map((category,index)=>{
                    return (
                      <span
                        key={index} 
                        className={["underline cursor-pointer",category === selectedCategory? "text-indigo-800": ""].join(" ")}
                        onClick={() => setSelectedCategory(category)} 
                      >
                        {category}
                      </span>
                    )
                  })}
                </div>

                <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-gray-500 dark:text-gray-300">{props.items?.length} Items</p>
                        <div className="flex items-center">
                            <p className="text-gray-500 dark:text-gray-300">Sort</p>
                            <select value={sort} onChange={e=>setSort(e.target.value)} className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                <option value="recommended">Recommended</option>
                                <option value="price">Price</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                       {props.items?.map((item: Item, index:number)=>{
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