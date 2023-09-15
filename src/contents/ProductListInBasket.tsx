import {View, Text, FlatList} from 'react-native';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../reduxToolkit/store';
import ProductCardInBasket from '../components/ProductCardInBasket';
import {Product} from '../types/Product/ProductModel';
import { moderateScale } from '../utils/Dimension';

const ProductListInBasket: FC = () => {
  const productsInBasket = useSelector(
    (state: RootState) => state.product.value.productsInBasket,
  );
  return (
    <FlatList
      data={productsInBasket}
      keyExtractor={(item: Product, index: number) =>
        index.toString() + 'productInBasket'
      }
      key={'ProductListInBasket'}
      renderItem={({item, index}) => {
        return <ProductCardInBasket key={index} product={item} />;
      }}
      ListHeaderComponent={
        <Text style={{textAlign:'center',fontSize:20,paddingVertical:moderateScale(10)}}>Sepetim</Text>
      }
    />
  );
};

export default ProductListInBasket;
