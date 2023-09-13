import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {FC} from 'react';
import ProductCard from '../components/ProductCard';
import {Colors} from '../utils/Colors';

interface Props {
  products: any;
  isLoading: boolean;
}

const ProductList: FC<Props> = props => {
  const {products, isLoading} = props;
  return (
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ListEmptyComponent={
          <ActivityIndicator size={'large'} color={Colors.blue} />
        }
        data={products}
        numColumns={2}
        key={'productList'}
        renderItem={({item}) => {
          return <ProductCard product={item} />;
        }}
      />
  );
};

export default ProductList;
