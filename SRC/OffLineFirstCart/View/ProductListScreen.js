import React, { useEffect, useState, useCallback } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import ProductListViewModel from '../viewmodel/ProductListViewModel';
import Header from '../Components/Header';
import ProductItem from '../Components/ProductItem';

const LIMIT = 30;

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const viewModel = new ProductListViewModel();

  const fetchMore = async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    const newProducts = await viewModel.fetchProducts(offset, LIMIT);
    setProducts(prev => [...prev, ...newProducts]);
    setOffset(prev => prev + LIMIT);
    setHasMore(newProducts.length === LIMIT);
    setLoadingMore(false);
  };

  useEffect(() => {
    fetchMore(); 
  }, []);

  const renderItem = useCallback(({ item }) => <ProductItem product={item} />, []);

  const renderFooter = () => {
    return loadingMore ? (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#333" />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListFooterComponent={renderFooter}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}

        initialNumToRender={20}
        maxToRenderPerBatch={25}
        windowSize={10}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={50}
        getItemLayout={(data, index) => ({
          length: 100, 
          offset: 100 * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f7',
  },
  list: {
    padding: 8,
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
});

export default ProductListScreen;
