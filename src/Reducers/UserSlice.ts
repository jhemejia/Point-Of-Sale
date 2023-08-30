import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Stores";

export interface AuthState {
    uid: string | null;
    email: string | null;
    emailVerified: boolean;
    phone: string | null;
    photoUrl: string | null;
    name: string | null;
    provider: string;
}

const initialState: AuthState = {
    uid: null,
    email: null,
    emailVerified: false,
    phone: null,
    photoUrl: null,
    name: null,
    provider: '',
};



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logUser(state, action ){
            state = action.payload;
        }
    }
})

// use the selectSelf and create draftSafeSelectors for slice
const selectSelf = (state: RootState) => state

export const selectUser = createDraftSafeSelector(
  selectSelf,
  (state) => state.user
)

export const { logUser } = userSlice.actions