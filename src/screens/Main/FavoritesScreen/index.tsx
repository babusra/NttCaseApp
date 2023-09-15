import {View, Text} from 'react-native';
import React, {FC} from 'react';
import ProductListInFavorites from '../../../contents/ProductListInFavorites';
import ProductList from '../../../contents/ProductList';
import { SafeAreaView } from 'react-native-safe-area-context';
import basketStyle from '../../../styles/basketStyle';

const FavoritesScreen: FC = () => {
  return(
    <SafeAreaView style={basketStyle.body} >
          <ProductListInFavorites />

    </SafeAreaView>
    )
};

export default FavoritesScreen;
