import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredProducts } from '../store/productsSlice';
import ProductItem from '../components/ProductItem';

const ProductListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const filteredProducts = useSelector(state => state.products.filteredProducts);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(setFilteredProducts(products));
  }, [products, dispatch]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filteredList = products.filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    dispatch(setFilteredProducts(filteredList));
  };

  const handleSelectProduct = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductItem product={item} onSelect={handleSelectProduct} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default ProductListScreen;
