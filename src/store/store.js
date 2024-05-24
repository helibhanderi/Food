import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-Cart/cartSlice";
import cartUiSlice from "./shopping-Cart/cartUiSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
    }
});
export default store