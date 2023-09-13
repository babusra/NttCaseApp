import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {navigation} from '../navigation/rootNavigation';
import productCardStyle from '../styles/productCardStyle';
import {Colors} from '../utils/Colors';
import {Product} from '../types/Product/ProductModel';
import {useDispatch} from 'react-redux';
import { addToBasketAction, addToFavoritesAction } from '../reduxToolkit/features/MainSlices/ProductSlice';

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = props => {
  const {product} = props;

  const dispatch = useDispatch();

 const onAddToBasket = (item: Product) => {
    dispatch(addToBasketAction(item));
  };

  const addToFavorites = (item: Product) => {
    dispatch(addToFavoritesAction(item));
  };  return (
    <TouchableOpacity
      onPress={
        () => {}
        //   navigation.navigate('ProductDetailScreen', {product: product})
      }
      style={productCardStyle.container}>
      <View>
        <Image
          style={productCardStyle.image}
          source={{uri: product.imageUrl}}
        />
        <TouchableOpacity
          onPress={()=>addToFavorites(product)} 
          style={{position: 'absolute', right: 5}}>
          <Icon
            name={product.isFavorite ? 'heart' : 'hearto'}
            size={20}
            color={Colors.yellow}
          />
        </TouchableOpacity>
      </View>
      <Text style={productCardStyle.text_price}>{product.price} ₺</Text>
      <Text style={productCardStyle.text_productName}>{product.name}</Text>
      <View></View>
      <TouchableOpacity onPress={() => onAddToBasket(product)} style={productCardStyle.button}>
        <Text style={productCardStyle.button_text}>Add to Basket</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;
