import {View, Text} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { moderateScale } from '../utils/Dimension';
import Icon from 'react-native-vector-icons/Entypo';

const Location = ({formattedAddress}:any) => {
  return (
    <View
      style={{
        paddingTop: moderateScale(30),
        alignItems: 'center',
        flex: 1,
      }}>
      <Icon name="location" size={40} color={Colors.red} />
      <Text
        style={{
          lineHeight: 30,
          fontSize: 20,
          color: Colors.darkGrey,
          padding: moderateScale(20),
          fontStyle: 'italic',
        }}>
        {formattedAddress}
      </Text>
    </View>
  );
};

export default Location;
