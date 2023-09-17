import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {FC, useEffect} from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {Product} from '../../../types/Product/ProductModel';
import {Colors} from '../../../utils/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {navigation} from '../../../navigation/rootNavigation';
import productDetailStyle from '../../../styles/productDetailStyle';
import useProductDetailManager from './useProductDetailManager';

interface Props {
  route: any;
}

const ProductDetailScreen: FC<Props> = props => {
  const product: Product = props.route.params.product;

  const {isFav, onAddToBasket, addToFavorites} =
    useProductDetailManager(product);

  return (
    <View style={{flex: 1}}>
      <View style={productDetailStyle.imageContainer}>
        <ImageBackground
          source={{uri: product.imageUrl}}
          style={{width: '100%', height: '80%'}}>
          <LinearGradient
            colors={['#00000099', '#00000000']}
            style={{height: '80%'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={productDetailStyle.backButton}
                onPress={() => navigation.goBack()}>
                <Icon name={'left'} color={Colors.white} size={27} />
              </TouchableOpacity>

              <Text style={productDetailStyle.shippingMethod_text}>
                
                {product.shippingMethod}
              </Text>
            </View>
            <Text style={productDetailStyle.productName_text}>
              
              {product.name}
            </Text>
          </LinearGradient>
          <View>
            <TouchableOpacity
              onPress={() => addToFavorites(product)}
              style={productDetailStyle.icon_button}>
              <Icon
                name={isFav ? 'heart' : 'hearto'}
                size={40}
                color={Colors.red}
                style={productDetailStyle.icon}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <Text style={productDetailStyle.productDesc_text}>
        
        {product.description}
      </Text>
      <View style={productDetailStyle.bottomBar}>
        <View>
          <Text style={{fontSize: 23}}>{product.price} ₺</Text>
        </View>

        <TouchableOpacity
          onPress={() => onAddToBasket(product)}
          style={productDetailStyle.add_basket_button}>
          <Text style={productDetailStyle.add_basket_button_text}>
            Sepete Ekle
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
