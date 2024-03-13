import { configureStore } from "@reduxjs/toolkit";
import menuDrawerSlice from "../components/header/menuDrawer/slices/menuDrawerSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
     menuDrawerSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;