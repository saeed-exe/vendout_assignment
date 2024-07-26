import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useProductStore } from '../../hooks/useProductStore';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';

export default function ProductListScreen() {
  const products = useProductStore(state => state.products);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <Link href={`/details?id=${item.id}`} asChild>
            <ProductCard product={item} />
          </Link>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  productList: {
    padding: 10,
  },
});