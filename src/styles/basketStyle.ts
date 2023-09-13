import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {horizontalScale, moderateScale} from '../utils/Dimension';

const basketStyle = StyleSheet.create({
  body: {
    paddingHorizontal: horizontalScale(15),
    flex: 1,
  },
  button: {
    backgroundColor: Colors.blue,
    borderRadius: 4,
    width: horizontalScale(150),
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
    padding: moderateScale(7),
    textAlign: 'center',
  },
});

export default basketStyle;
