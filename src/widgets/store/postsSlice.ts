import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export const {actions: postsActions, reducer: postsReducer} = postsSlice;