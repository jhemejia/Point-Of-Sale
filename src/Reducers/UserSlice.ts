import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Stores";

export interface UserData {
    uid: string | null;
    email: string | null;
    emailVerified: boolean;
    phone: string | null;
    photoUrl: string | null;
    name: string | null;
    provider: string;
}

export interface AuthState {
    user: UserData | null;
}

const initialState: AuthState = {
    user: null,
};



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logUser(state, action ){
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        removeUser(state){
            state.user = null
            localStorage.clear();
        }
    }
})

// use the selectSelf and create draftSafeSelectors for slice
const selectSelf = (state: RootState) => state

export const selectUser = createDraftSafeSelector(
  selectSelf,
  (state) => state.user.user
)

export const { logUser, removeUser } = userSlice.actions