import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseToItem,
  increaseToItem,
  addToCart as reduxAddToCart,
  removeToCart as reduxRemoveToCart,
} from '../Redux/action';

import {
  addToCart as realmAdd,
  removeFromCart as realmRemove,
  decreaseQuantity ,
  increaseQuantity,
  getCartItems,
} from '../Services/cartService';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.reducer);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cartItems = getCartItems().filtered(`id == ${product.id}`);
    if (cartItems.length > 0) {
      setQuantity(cartItems[0].quantity);
    } else {
      setQuantity(0);
    }
  }, [cartData, product.id]);

  const handleAddToCart = () => {
    dispatch(reduxAddToCart(product));
    realmAdd(product);
  };

  const handleIncrease = () => {
    increaseQuantity(product.id);
    dispatch(increaseToItem(product));
  };

  const handleDecrease = () => {
    decreaseQuantity(product.id);
    dispatch(decreaseToItem(product));
  };

  const handleRemove = () => {
    realmRemove(product.id);
    dispatch(reduxRemoveToCart(product.id));
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.price}>₹ {product.price}</Text>

        {quantity > 0 ? (
          <View style={styles.quantityContainer}>
            {quantity > 1?(<TouchableOpacity onPress={handleDecrease} style={styles.qtyButton}>
              <Text style={styles.qtyText}>−</Text>
            </TouchableOpacity>):null}
            

            <Text style={styles.qtyValue}>{quantity}</Text>

            <TouchableOpacity onPress={handleIncrease} style={styles.qtyButton}>
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRemove} style={styles.removeButton}>
              <Text style={styles.removeText}>🗑</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Button title="Add to cart" onPress={handleAddToCart} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  info: {
    flexDirection:'row',
    marginLeft: 12,
    flex: 1,
    justifyContent:'space-between'
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 6,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'lightgrey'
  },
  qtyButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qtyValue: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 6,
  },
  removeButton: {
    marginLeft: 12,
  },
  removeText: {
    fontSize: 18,
  },
});

export default React.memo(ProductItem);
