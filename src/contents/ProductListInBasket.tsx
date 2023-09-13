import {View, Text, FlatList} from 'react-native';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../reduxToolkit/store';
import ProductCardInBasket from '../components/ProductCardInBasket';

const ProductListInBasket: FC = () => {
  const productsInBasket = useSelector(
    (state: RootState) => state.product.value.productsInBasket,
  );
  return (
    <FlatList
      data={productsInBasket}
      renderItem={({item, index}) => {
        return <ProductCardInBasket key={index} product={item} />;
      }}
    />
  );
};

export default ProductListInBasket;
