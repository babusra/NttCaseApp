import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../utils/Colors'
import { verticalScale, horizontalScale, moderateScale } from '../utils/Dimension'

const productCardStyle = StyleSheet.create({
    container: {
        borderColor: Colors.grey,
        borderRadius: 10,
        height: verticalScale(270),
        width: horizontalScale(150),
        justifyContent: 'space-between',
        margin: moderateScale(10),
        backgroundColor:Colors.white,
        elevation: 5, // Android için gölge efekti
        shadowColor: 'black', // iOS için gölge rengi
        shadowOffset: { width: 0, height: 2 }, // iOS için gölge offset
        shadowOpacity: 0.3, // iOS için gölge opaklığı
        shadowRadius: 3, // iOS için gölge yarıçapı
      },
      image: {
        width: '100%',
        height: verticalScale(140),
        alignSelf: 'center',
        borderTopLeftRadius:8,
        borderTopRightRadius:8

      },
      text_price: {
        color: Colors.purple,
        paddingHorizontal:moderateScale(8),
        paddingVertical:moderateScale(5)
      },
      text_productName: {
        fontSize: 12,
        paddingHorizontal:moderateScale(8)

      },
      button: {
        backgroundColor: Colors.purple,
        borderRadius: 8,
        margin:moderateScale(8),

        
      },
      button_text: {
        color: Colors.white,
        fontSize: 12,
        padding: moderateScale(9),
        textAlign: 'center',
        
      },
      fav_Button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      bottomNavigationView: {
        backgroundColor: Colors.white,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        width: '100%',
        height: '30%',
        alignItems: 'center',
      },
})

export default productCardStyle