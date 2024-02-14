import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    isLoading: false,
    products: [],
    cart: [],
    isError: false,
    amount: 0,
    total: 0
}
export const fetchAllProducts = createAsyncThunk(
    "productSlice/fetchAllProducts",
    async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        // const res = await axios.get('https://dummyjson.com/products');
        return res.data;
    }
)

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const addToCartData = state.cart.find((item) => item.id === action.payload.id)
            addToCartData ? addToCartData.quantity++ : state.cart.push({ ...action.payload, quantity: 1 });
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload)
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload)
            item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
        },
        removeItem: (state, action) => {
            const deleteItem = state.cart.filter((item) => item.id !== action.payload)
            state.cart = deleteItem;
        },
        updateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cart.map((item) => {
              amount += item.quantity;
              total += item.quantity * item.price;
            });
            state.total = total;
            state.amount = amount;
          },
          removeCartItem : (state) => {
            state.cart= []
          },
    },
    extraReducers: (bulider => {
        bulider.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false
        })

        bulider.addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true
        })
        bulider.addCase(fetchAllProducts.rejected, (state) => {
            state.isLoading = false
            state.products = []
            state.isError = true
        })
    })

});


export const { addToCart, incrementQuantity, decrementQuantity, removeItem , updateTotal , removeCartItem} = productSlice.actions;
export default productSlice.reducer