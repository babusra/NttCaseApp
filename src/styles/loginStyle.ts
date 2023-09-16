import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { verticalScale, horizontalScale, moderateScale } from "../utils/Dimension";

const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      paddingHorizontal:moderateScale(20),
      paddingTop:moderateScale(40)
      
    },
   remember_button:{
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon:{
    borderWidth: 1,
    borderRadius: 4,
    borderColor:Colors.darkGrey,
    marginHorizontal: moderateScale(10),
    color:Colors.darkGrey
  },
    header: {
      fontSize: 30,
      alignSelf: 'center',
      paddingVertical: verticalScale(30),
      color: Colors.purple,
    },
    input: {
      borderWidth: 1,
      borderColor: Colors.lightGrey,
      height: verticalScale(45),
      borderRadius: 8,
      marginVertical: verticalScale(8),
      paddingHorizontal: horizontalScale(8),
      marginBottom: moderateScale(20),
    },
    button: {
      borderRadius: 8,
      backgroundColor: Colors.purple,
      height: verticalScale(45),
      marginTop:moderateScale(40),
      width: horizontalScale(200),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default loginStyles