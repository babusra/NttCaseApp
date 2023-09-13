import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import productCardInBasketStyle from '../styles/productCardInBasketStyle';
import {Product} from '../types/Product/ProductModel';
import {Colors} from '../utils/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import { productAmountIncrement, productAmountDecrement } from '../reduxToolkit/features/MainSlices/ProductSlice';

interface Props {
  product: Product;
}

const ProductCardInBasket: FC<Props> = props => {
  const {product} = props;

  const dispatch = useDispatch();

  const incremetProductAmount = (item: Product) => {
    dispatch(productAmountIncrement(item));
  };

  const decrementProductAmount = (item: Product) => {
    dispatch(productAmountDecrement(item));
  };
  return (
    <View style={productCardInBasketStyle.container}>
      <View>
        <Text>{product.name}</Text>
        <Text style={{color: Colors.blue}}>{product.price} ₺</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => decrementProductAmount(product)}
          style={productCardInBasketStyle.button}>
          <Icon name="minus" size={15} />
        </TouchableOpacity>
        <TouchableOpacity style={productCardInBasketStyle.amount_text}>
          <Text style={{color: Colors.white}}>{product.total}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => incremetProductAmount(product)}
          style={productCardInBasketStyle.button}>
          <Icon name="plus" size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCardInBasket;
