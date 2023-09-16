import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC} from 'react';
import productCardInBasketStyle from '../styles/productCardInBasketStyle';
import {Product} from '../types/Product/ProductModel';
import {Colors} from '../utils/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import useProductCardBasketManager from './CardManager/useProductCardBasketManager';

interface Props {
  product: Product;
}

const ProductCardInBasket: FC<Props> = props => {
  const {product} = props;

  const {decrementProductAmount, incremetProductAmount} = useProductCardBasketManager();
  return (
    <View style={productCardInBasketStyle.container}>
      <Image
        style={productCardInBasketStyle.image}
        source={{uri: product.imageUrl}}
      />
      <View>
        <Text>{product.name}</Text>
        <Text style={{color: Colors.purple}}>{product.price} ₺</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => decrementProductAmount(product)}>
          <Icon
            name="minus"
            size={17}
            style={productCardInBasketStyle.buttonMinus}
          />
        </TouchableOpacity>
        <TouchableOpacity style={productCardInBasketStyle.amount_text}>
          <Text style={{color: Colors.white}}>{product.total}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => incremetProductAmount(product)}>
          <Icon
            name="plus"
            size={17}
            style={productCardInBasketStyle.buttonPlus}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCardInBasket;
