import { create } from 'zustand';
import { products, Product } from '../constants/Products';

interface ProductStore {
  products: Product[];
}

export const useProductStore = create<ProductStore>(() => ({
  products: products,
}));