import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {navigation} from '../navigation/rootNavigation';
import productCardStyle from '../styles/productCardStyle';
import {Colors} from '../utils/Colors';
import {Product} from '../types/Product/ProductModel';
import {Screens} from '../navigation/Screens';
import productCardInBasketStyle from '../styles/productCardInBasketStyle';
import {moderateScale} from '../utils/Dimension';
import BottomModal from './BottomModal';
import ProductDescription from '../contents/ProductDescription';
import useProductCardManager from './CardManager/useProductCardManager';

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = props => {
  const {product} = props;

  const {
    onAddToBasket,
    addToFavorites,
    incremetProductAmount,
    decrementProductAmount,
    visible,
    toggleBottomNavigationView,
  } = useProductCardManager();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(Screens.ProductDetail, {product: product})
      }
      style={productCardStyle.container}>
      <View>
        <Image
          style={productCardStyle.image}
          source={{uri: product.imageUrl}}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => addToFavorites(product)}
          style={{position: 'absolute', right: 5, top: 5}}>
          <Icon
            name={product.isFavorite ? 'heart' : 'hearto'}
            size={22}
            color={Colors.red}
            style={productCardStyle.fav_Button}
          />
        </TouchableOpacity>
      </View>
      <Text style={productCardStyle.text_price}>{product.price} ₺</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={productCardStyle.text_productName}>{product.name}</Text>

        <TouchableOpacity
          style={{paddingRight: moderateScale(13)}}
          onPress={() => toggleBottomNavigationView()}>
          <Icon name="infocirlceo" size={19} color={Colors.darkGrey} />
        </TouchableOpacity>
      </View>

      <BottomModal
        visible={visible}
        toggleBottomNavigationView={toggleBottomNavigationView}
        content={<ProductDescription product={product} />}
      />
      {product.total !== 0 ? (
        <View style={productCardInBasketStyle.incOrDec_button}>
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
      ) : (
        <TouchableOpacity
          onPress={() => onAddToBasket(product)}
          style={productCardStyle.button}>
          <Text style={productCardStyle.button_text}>Sepete Ekle</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default ProductCard;
