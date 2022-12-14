import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  specificProduct:[],
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

export const getSpecificProduct = createAsyncThunk(
  "products/getSpecificProduct",
  async (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json()
    )
    
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItem += 1;  //number of items in cart
    },

    addItemsToCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    addTotalAmount: (state, action) => {
      state.subTotal += action.payload.price;
      //   let total = 0;
      //   state.itemsInCart.forEach((item) => {
      //     total += item.price;
      //   });
      //   state.subTotal = total;
    },
    removeFromCart: (state, action) => {
      // console.log("action", action);
      let index = state.itemsInCart.findIndex(
        (item) => item._id === action.payload
      );

      state.cartItem -= 1;
      state.subTotal -= state.itemsInCart[index].price;
      state.itemsInCart.splice(index, 1);
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
    [getSpecificProduct.fulfilled]: (state, action) => {
      state.specificProduct = action.payload;
    },
  },
});
export const { addCartItem, addTotalAmount, addItemsToCart, removeFromCart } =
  productSlice.actions;
export default productSlice.reducer;
