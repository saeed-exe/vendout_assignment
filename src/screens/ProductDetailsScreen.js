import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  const handleBuyNow = () => {
    Alert.alert('Buy Now', `You have selected to buy ${product.name}`);
  };

  return (
    <View style={styles.screen}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Button title="Buy Now" onPress={handleBuyNow} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;
