import { createSlice, createAsyncThunk, createDraftSafeSelector } from '@reduxjs/toolkit'
import { type RootState } from '../../Stores/store'
import { Item } from '../../Types/StoreTypes'
import axios from 'axios'

// Define a type for the slice state
interface ProductsState {
    data: Item[] | undefined,
    isLoading: boolean,
    hasError: boolean,
  }
  
  // Define the initial state using that type
  const initialState = {
    data: [] ,
    isLoading: false,
    hasError: false,
  } as ProductsState
  // fetch products from api
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
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
        builder.addCase(loadProducts.pending,(state)=>{
            state.isLoading = true;
            state.hasError = false;
            state.data = []
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
  
// use the selectSelf and create draftSafeSelectors for slice
 const selectSelf = (state: RootState) => state

  export const selectStore = createDraftSafeSelector(
    selectSelf,
    (state) => state.store
  )