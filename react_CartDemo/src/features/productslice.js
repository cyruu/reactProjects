import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProduct = createAsyncThunk("products", async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");
  const data = response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cartProducts: [],
    loading: false,
    error: false,
  },
  reducers: {
    addToCart: (state, action) => {
      // add to cartProduct array
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          state.cartProducts.push(product);
        }
      });
      // set this item as added:true in products array
      state.products = state.products.map((product) => {
        if (product.id == action.payload.id) {
          return { ...product, added: true };
        } else {
          return product;
        }
      });
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id != action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default productSlice.reducer;
export const { addToCart, removeFromCart } = productSlice.actions;
