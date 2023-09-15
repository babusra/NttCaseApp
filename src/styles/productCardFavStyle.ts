import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {moderateScale} from '../utils/Dimension';

const productCardFavStyle = StyleSheet.create({
  image_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    width: '60%',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.red,
    elevation: 5,
    shadowColor: '#000',
    shadowRadius: 3,
    width: moderateScale(50),
    height: moderateScale(50),
  },
});
export default productCardFavStyle;
