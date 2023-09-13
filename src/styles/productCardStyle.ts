import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../utils/Colors'
import { verticalScale, horizontalScale, moderateScale } from '../utils/Dimension'

const productCardStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.grey,
        borderRadius: 8,
        height: verticalScale(250),
        width: horizontalScale(150),
        padding: 10,
        justifyContent: 'space-between',
        margin: moderateScale(10),
      },
      image: {
        width: horizontalScale(120),
        height: verticalScale(120),
        alignSelf: 'center',
      },
      text_price: {
        color: Colors.blue,
      },
      text_productName: {
        fontSize: 12,
      },
      button: {
        backgroundColor: Colors.blue,
        borderRadius: 4,
      },
      button_text: {
        color: Colors.white,
        fontSize: 12,
        padding: moderateScale(9),
        textAlign: 'center',
      },
})

export default productCardStyle