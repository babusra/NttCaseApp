import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {horizontalScale, moderateScale} from '../utils/Dimension';

const basketStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor:Colors.white,
    paddingHorizontal: horizontalScale(15),

  },
  button: {
    backgroundColor: Colors.purple,
    borderRadius: 4,
    width: horizontalScale(150),
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
    padding: moderateScale(7),
    textAlign: 'center',
  },
  bottomBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: moderateScale(10),
   

  }
});

export default basketStyle;
