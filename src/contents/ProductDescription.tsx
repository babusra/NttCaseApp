import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {moderateScale} from '../utils/Dimension';
import {Product} from '../types/Product/ProductModel';
import {Colors} from '../utils/Colors';

interface Props {
  product: Product;
}

const ProductDescription: FC<Props> = props => {
  const {product} = props;
  return (
    <View style={{paddingVertical: moderateScale(30)}}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 25,
          color: Colors.darkGrey,
          textAlign: 'center',
        }}>
        {product.name}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontStyle: 'italic',
          color: Colors.darkGrey,
          padding: moderateScale(20),
        }}>
        {product.description}
      </Text>
    </View>
  );
};

export default ProductDescription;
