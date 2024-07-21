import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: '1',
      name: 'Product 1',
      description: 'This is the description for product 1.',
      price: '$10.00',
      image: require('../assets/images/product1.jpeg'),
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'This is the description for product 2.',
      price: '$20.00',
      image: require('../assets/images/product2.jpeg'),
    },
    // Add more products as needed
  ],
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
