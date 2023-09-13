import {View, Text, FlatList} from 'react-native';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useProductListManager from './useProductListManager';
import ProductList from '../../../contents/ProductList';

const ProductListScreen: FC = () => {
  const {products, isLoading} = useProductListManager();

  return (
    <SafeAreaView>
      <Text>Products</Text>
      <ProductList products={products} isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default ProductListScreen;
