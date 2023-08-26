import { useEffect, useState } from 'react'
import ProductsGrid from '../organisms/ProductsGrid'
import { useAppDispatch, useAppSelector } from '../../Stores/store';
import { loadProducts, selectStore } from '../../Reducers/Store/productsSlice';
import { Item } from '../../Types/StoreTypes';

const Store = () => {

  const [ items, setItems ] = useState<Item[]| undefined>()
  const dispatch = useAppDispatch()
  const store = useAppSelector(selectStore)
   
  // get products on load.
    useEffect(()=>{
        dispatch(loadProducts()) 
    },[]) 
  // Listen for changes in the store.products.data and update items accordingly 
    useEffect(() => {
      setItems(store.products.data);
    }, [store.products.data]);
    
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-full bg-white'>
      <ProductsGrid items={items}/>
    </div>
  )
}

export default Store