import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from './Reducer'

export const store = configureStore({
    reducer:{
        todo:TodoSlice
    }
})