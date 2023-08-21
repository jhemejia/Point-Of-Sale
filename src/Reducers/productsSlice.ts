import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Item } from '../Types/StoreTypes'
import axios from 'axios'

// Define a type for the slice state
interface ProductsState {
    data: Item[] | undefined,
    isLoading: boolean,
    hasError: boolean,
  }
  
  // Define the initial state using that type
  const initialState: ProductsState = {
    data: [] ,
    isLoading: false,
    hasError: false,
  }
  export const loadProducts = createAsyncThunk<Item[]>(
    'products/loadProducts',
    async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        return response.data as Item[]; // Return the 'data' property directly
      } catch (error:any) {
        throw new Error(error.message);
      }
    }
  );
  
  export const productsSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
        builder.addCase(loadProducts.pending,(state, action)=>{
            state.isLoading = true;
            state.hasError = false;
            state.data = action.payload
        })
        builder.addCase(loadProducts.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.data = action.payload
        })
        builder.addCase(loadProducts.rejected,(state)=>{
            state.isLoading = false;
            state.hasError = true;
            state.data = []
        })
    }
  })
  
  export const selectProducts = (state: RootState) => state.products