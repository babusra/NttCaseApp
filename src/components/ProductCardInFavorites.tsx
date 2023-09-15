import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC} from 'react';
import productCardInBasketStyle from '../styles/productCardInBasketStyle';
import {Product} from '../types/Product/ProductModel';
import {Colors} from '../utils/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavoritesAction} from '../reduxToolkit/features/MainSlices/ProductSlice';
import productCardStyle from '../styles/productCardStyle';
import {moderateScale} from '../utils/Dimension';
import productDetailStyle from '../styles/productDetailStyle';
import {RootState} from '../reduxToolkit/store';
import useProductCardFavoritesManager from './CardManager/useProductCardFavoritesManager';
import productCardFavStyle from '../styles/productCardFavStyle';

interface Props {
  product: Product;
}

const ProductCardInFavorites: FC<Props> = props => {
  const {product} = props;

  const {addToFavorites, isFav} = useProductCardFavoritesManager(product);

  return (
    <View style={productCardFavStyle.image_container}>
      <Image
        style={productCardInBasketStyle.image}
        source={{uri: product.imageUrl}}
      />
      <View style={productCardFavStyle.body}>
        <View>
          <Text>{product.name}</Text>
          <Text style={{color: Colors.blue}}>{product.price} ₺</Text>
        </View>
        <TouchableOpacity
          onPress={() => addToFavorites(product)}
          style={{}}>
          <Icon
            name={isFav ? 'heart' : 'hearto'}
            size={30}
            color={Colors.red}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCardInFavorites;
