import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  cartItem: 0,
  itemsInCart: [],
  subTotal: 0,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
    // .then(data=>console.log(data))
  }
);
// export const getSpecificProducts=createAsyncThunk('products/getSpecificProducts',async(id)=>{
//     return fetch('https://fakestoreapi.com/products/{id}')
//     .then(res=>res.json())
//     .then(data=>console.log('spec',data))

// })
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItem += 1;
    },
   
    addItemsToCart: (state, action) => {
       state.itemsInCart.push(action.payload);
    },
    addTotalAmount: (state) => {
        let total=0
        state.itemsInCart.forEach(item=>{
            total+=item.price
        })
        state.subTotal=total
      },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { addCartItem, addTotalAmount, addItemsToCart } =productSlice.actions;
export default productSlice.reducer;
