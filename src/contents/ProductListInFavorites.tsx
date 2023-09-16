import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductCardInBasket from '../components/ProductCardInBasket';
import {RootState} from '../reduxToolkit/store';
import {Product} from '../types/Product/ProductModel';
import ProductCardInFavorites from '../components/ProductCardInFavorites';
import {moderateScale} from '../utils/Dimension';
import {Colors} from '../utils/Colors';

const ProductListInFavorites = () => {
  const productsInFavorites = useSelector(
    (state: RootState) => state.product.value.favoritesProducts,
  );
  return (
    <FlatList
      data={productsInFavorites}
      keyExtractor={(item: Product, index: number) =>
        index.toString() + 'productInFavorites'
      }
      key={'ProductListInFavorites'}
      renderItem={({item, index}) => {
        return <ProductCardInFavorites key={index} product={item} />;
      }}
      ListHeaderComponent={
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            paddingVertical: moderateScale(10),
          }}>
          Favorilerim
        </Text>
      }
      ListEmptyComponent={
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{fontSize: 15, fontStyle: 'italic', color: Colors.darkGrey}}>
            Henüz Favorilediğiniz ürün bulunmuyor..
          </Text>
        </View>
      }
    />
  );
};

export default ProductListInFavorites;
