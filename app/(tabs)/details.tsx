import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useProductStore } from '../../hooks/useProductStore';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = useProductStore(state => state.products.find(p => p.id === id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  const handleBuyNow = () => {
    Alert.alert('Success', `You've purchased the ${product.name}!`);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});