import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {BottomSheet} from 'react-native-btr';
import productCardStyle from '../styles/productCardStyle';

interface Props {
  visible: boolean;
  toggleBottomNavigationView: () => void;
  content: any;
}

const BottomModal: FC<Props> = props => {
  const {visible, toggleBottomNavigationView, content} = props;
  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomNavigationView}
      onBackdropPress={toggleBottomNavigationView}>
      <View style={productCardStyle.bottomNavigationView}>
        {content}
       
      </View>
    </BottomSheet>
  );
};

export default BottomModal;
