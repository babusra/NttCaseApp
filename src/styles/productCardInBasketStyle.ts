import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { verticalScale, moderateScale } from '../utils/Dimension'
import { Colors } from '../utils/Colors'

const productCardInBasketStyle=StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: verticalScale(10),
        alignItems: 'center',
      },
      amount_text: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: moderateScale(15),
        backgroundColor: Colors.blue,
      },
      button: {
        backgroundColor: Colors.grey,
        padding: moderateScale(15),
      },
})

export default productCardInBasketStyle