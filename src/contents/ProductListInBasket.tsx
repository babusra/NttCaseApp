import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reduxToolkit/store';
import ProductCardInBasket from '../components/ProductCardInBasket';
import {Product} from '../types/Product/ProductModel';
import {moderateScale} from '../utils/Dimension';
import {Colors} from '../utils/Colors';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import productCardInBasketStyle from '../styles/productCardInBasketStyle';
import {removeFromBasket} from '../reduxToolkit/features/MainSlices/ProductSlice';

const ProductListInBasket: FC = () => {
  const dispatch = useDispatch();
  const productsInBasket = useSelector(
    (state: RootState) => state.product.value.productsInBasket,
  );

  return (
    <SwipeListView
      data={productsInBasket}
      keyExtractor={(item: Product, index: number) =>
        index.toString() + 'productInBasket'
      }
      key={'ProductListInBasket'}
      renderItem={({item, index}) => {
        return <ProductCardInBasket key={index} product={item} />;
      }}
      ListHeaderComponent={
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            paddingVertical: moderateScale(10),
          }}>
          Sepetim
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
      renderHiddenItem={(data, rowMap) => (
        <TouchableOpacity
          style={productCardInBasketStyle.trash_container}
          onPress={item => dispatch(removeFromBasket(data.item))}>
          <Icon name="trash" size={30} color={Colors.white} />
        </TouchableOpacity>
      )}
      disableRightSwipe
      leftOpenValue={-75}
      rightOpenValue={-75}
      bounces={false}
    />
  );
};

export default ProductListInBasket;
