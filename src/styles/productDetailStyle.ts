import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {horizontalScale, moderateScale} from '../utils/Dimension';

const productDetailStyle = StyleSheet.create({
  imageContainer: {height: '60%', width: '100%'},
  backButton: {
    marginTop: moderateScale(30),
    padding: moderateScale(10),
    width: moderateScale(80),
  },
  shippingMethod_text: {
    paddingHorizontal: moderateScale(10),
    paddingBottom: moderateScale(10),
    alignSelf: 'flex-end',
    right: 0,
    marginLeft: 'auto',
    fontSize: 17,
    color: Colors.white,
  },
  productName_text: {
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScale(20),
    fontSize: 30,
    color: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  icon_button: {
    position: 'absolute',
    right: moderateScale(10),
    bottom: -moderateScale(25),
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.red,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 3,
    width: moderateScale(50),
    height: moderateScale(50),
  },
  productDesc_text: {
    textAlign: 'left',
    lineHeight: 20,
    padding: moderateScale(20),
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: moderateScale(40),
  },
  add_basket_button: {
    backgroundColor: Colors.purple,
    borderRadius: 4,
    width: horizontalScale(150),
  },
  add_basket_button_text: {
    color: '#fff',
    fontSize: 16,
    padding: moderateScale(7),
    textAlign: 'center',
  },
});

export default productDetailStyle;
