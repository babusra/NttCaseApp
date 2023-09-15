import {View, Text, FlatList} from 'react-native';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useProductListManager from './useProductListManager';
import ProductList from '../../../contents/ProductList';
import { moderateScale } from '../../../utils/Dimension';

const ProductListScreen: FC = () => {
  const {products, isLoading} = useProductListManager();

  return (
    <View style={{paddingTop:moderateScale(40)}}>
      <ProductList products={products} isLoading={isLoading} />
      </View>
  );
};

export default ProductListScreen;
