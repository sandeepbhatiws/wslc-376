import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

var cartData = localStorage.getItem('cartItems');
var cartData = JSON.parse(cartData);


const initialState = {
  cartItems: cartData ?? [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteCart: (state, action) => {
      if (confirm('Are you sure you want to remove ?')) {
        var cartData = state.cartItems.filter((v) => {
          if (v.id != action.payload) {
            return v;
          }
        })

        state.cartItems = cartData;
        localStorage.setItem('cartItems', JSON.stringify(cartData));
      }

    },
    addToCart: (state, action) => {

      const checkProduct = state.cartItems.filter((v) => {
        if (action.payload.id == v.id) {
          return v;
        }
      })

      if (checkProduct.length > 0) {
        var finalData = state.cartItems.map((v) => {
          if (action.payload.id == v.id) {
            if (v.quantity < 10) {
              v.quantity++;
              toast.success('Update cart succussfully !')
              return v;
            } else {
              toast.error('maximum quantity reached !')
              return v;
            }
          } else {
            return v;
          }
        })

        var finalData = [...finalData];
        state.cartItems = finalData;
        localStorage.setItem('cartItems', JSON.stringify(finalData));

      } else {
        const info = {
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          category_name: action.payload.category_name,
          quantity: 1
        }

        const finalData = [info, ...state.cartItems];
        state.cartItems = finalData;
        toast.success('Add to cart succussfully !')
        localStorage.setItem('cartItems', JSON.stringify(finalData));
      }
    },
    updateCart: (state, action) => {
      
      if (action.payload.type == 'plus') {
          var finalData = state.cartItems.map((v) => {
            if (action.payload.id == v.id) {
              if(v.quantity< 10){
                v.quantity++;
                toast.success('Update cart succussfully !')
              } else {
                toast.error('maximum quantity reached !')
                return v;
              }
              
              return v;
            } else {
              return v;
            }
          })
          var finalData = [...finalData];
          state.cartItems = finalData
          localStorage.setItem('cartItems', JSON.stringify(finalData))
      } else {
          var finalData = state.cartItems.map((v) => {
            if (action.payload.id == v.id) {
              if (v.quantity > 1) {
                v.quantity--;
                toast.success('Update cart succussfully !')
              } else {
                return v;
              }
              return v;
            } else {
              return v;
            }
          })

          var finalData = [...finalData];
          state.cartItems = finalData
          localStorage.setItem('cartItems', JSON.stringify(finalData));
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { deleteCart, addToCart, updateCart } = cartSlice.actions

export default cartSlice.reducer