import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { verticalScale, horizontalScale, moderateScale } from "../utils/Dimension";

const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    body: {
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 30,
      alignSelf: 'center',
      paddingVertical: verticalScale(30),
      color: Colors.blue,
    },
    input: {
      borderWidth: 1,
      borderColor: Colors.grey,
      height: verticalScale(40),
      borderRadius: 8,
      marginVertical: verticalScale(8),
      paddingHorizontal: horizontalScale(8),
      marginBottom: moderateScale(20),
    },
    button: {
      borderRadius: 8,
      backgroundColor: Colors.blue,
      height: verticalScale(45),
      width: horizontalScale(200),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default loginStyles