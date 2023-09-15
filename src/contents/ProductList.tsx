import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState} from 'react';
import ProductCard from '../components/ProductCard';
import {Colors} from '../utils/Colors';
import {Product} from '../types/Product/ProductModel';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomModal from '../components/BottomModal';
import productListStyle from '../styles/productListStyle';
import useProductListManager from './ListManager/useProductListManager';
import { moderateScale } from '../utils/Dimension';

interface Props {
  products: Product[];
  isLoading: boolean;
}

const ProductList: FC<Props> = props => {
  const {products, isLoading} = props;
  const {visible, setVisible, sortByType, buttonText} = useProductListManager();

  return (
    <FlatList
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      data={products}
      numColumns={2}
      key={'productList'}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
      keyExtractor={(item: Product, index: number) =>
        index.toString() + 'product'
      }
      renderItem={({item}) => {
        return <ProductCard product={item} />;
      }}
      ListEmptyComponent={
        <ActivityIndicator size={'large'} color={Colors.blue} />
      }
      ListHeaderComponent={
        <View style={productListStyle.list_header}>
          <Text style={{fontSize:20}}>Ürünler</Text>
          <TouchableOpacity
            style={productListStyle.sort_button}
            onPress={() => setVisible(!visible)}>
            <Text style={{color: Colors.blue, fontWeight: '600'}}>
              {buttonText}
            </Text>
          </TouchableOpacity>
          <BottomModal
            visible={visible}
            toggleBottomNavigationView={() => setVisible(!visible)}
            content={
              <View style={productListStyle.buttons_container}>
                <TouchableOpacity
                  style={{
                    ...productListStyle.button,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    borderBottomWidth: 0.5,
                    borderColor: '#B3B4BE',
                  }}
                  onPress={() => sortByType('Ascending')}>
                  <Text style={{color: Colors.darkGrey}}>
                    Fiyata Göre Artan
                  </Text>
                  <Icon name="sort-up" size={20} color={Colors.darkGrey} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...productListStyle.button,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopWidth: 0.5,
                    borderColor: '#B3B4BE',
                  }}
                  onPress={() => sortByType('Descending')}>
                  <Text style={{color: Colors.darkGrey}}>
                    Fiyata Göre Azalan
                  </Text>
                  <Icon name="sort-down" size={20} color={Colors.darkGrey} />
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      }
    />
  );
};

export default ProductList;
