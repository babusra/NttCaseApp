import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {moderateScale} from '../utils/Dimension';

const productListStyle = StyleSheet.create({
  list_header: {
    flexDirection: 'row',
    width: moderateScale(320),
    justifyContent: 'space-between',
    paddingVertical:moderateScale(5)
  },
  sort_button: {
    borderWidth: 2,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    borderRadius: 15,
    borderColor: Colors.purple,
    backgroundColor:'#EDE7F6'
  },
  buttons_container: {
    padding: moderateScale(30),
  },
  button: {
    height: moderateScale(50),
    padding: moderateScale(10),
    width: moderateScale(300),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor:Colors.purple

  },
});

export default productListStyle;
