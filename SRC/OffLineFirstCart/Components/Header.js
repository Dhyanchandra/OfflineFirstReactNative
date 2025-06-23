import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { getCartItems } from '../Services/cartService';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  const [syncStatus, setSyncStatus] = useState('Checking...');

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        const unsyncedItems = getCartItems();

        if (unsyncedItems.length > 0) {
          setSyncStatus('Syncing...');
        } else {
          setSyncStatus('Online');
        }
      } else {
        setSyncStatus('Offline');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Product List</Text>
      <Text style={styles.syncStatus}>{syncStatus}</Text>
      <Text style={styles.cart}>{cartItems}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#2b6cb0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
  },
  syncStatus: {
    fontSize: 14,
    color: '#fff',
    fontStyle: 'italic',
    flex: 1,
    textAlign: 'center',
  },
  cart: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 5,
    flex: 1,
    textAlign: 'right',
  },
});

export default Header;
