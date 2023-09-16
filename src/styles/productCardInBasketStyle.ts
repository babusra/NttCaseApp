import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {verticalScale, moderateScale} from '../utils/Dimension';
import {Colors} from '../utils/Colors';

const productCardInBasketStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: Colors.grey,
  },
  trash_container:{
    position: 'absolute',
    right: 0,
    bottom:0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.red,
    padding: 20,
  },
  image: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: 10,
  },
  amount_text: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.purple,
    width: moderateScale(30),
  },
  buttonMinus: {
    backgroundColor: Colors.grey,

    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPlus: {
    backgroundColor: Colors.grey,

    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incOrDec_button: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 8,
  },
 
});

export default productCardInBasketStyle;
