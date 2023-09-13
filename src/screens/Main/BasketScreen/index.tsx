import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import ProductListInBasket from '../../../contents/ProductListInBasket';
import { moderateScale } from '../../../utils/Dimension';
import { Colors } from '../../../utils/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reduxToolkit/store';
import basketStyle from '../../../styles/basketStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

const BasketScreen: FC = () => {
  const totalProductPrice = useSelector(
    (state: RootState) => state.product.value.totalProductPrice,
  );
  return (
    <SafeAreaView style={basketStyle.body}>
      <ProductListInBasket />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          width: '100%',
          alignSelf: 'center',
          bottom: moderateScale(10),
        }}>
        <View>
          <Text style={{color: Colors.blue, fontSize: 16}}>Price:</Text>
          <Text>{totalProductPrice} ₺</Text>
        </View>
        <TouchableOpacity style={basketStyle.button}>
          <Text style={basketStyle.button_text}>Complete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
