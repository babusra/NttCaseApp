import {useState} from 'react';
import {Product} from '../../types/Product/ProductModel';
import {useDispatch} from 'react-redux';
import {navigation} from '../../navigation/rootNavigation';
import {
  addToBasketAction,
  addToFavoritesAction,
  productAmountIncrement,
  productAmountDecrement,
} from '../../reduxToolkit/features/MainSlices/ProductSlice';

const useProductCardManager = () => {
  const dispatch = useDispatch();

  const onAddToBasket = (item: Product) => {
    dispatch(addToBasketAction(item));
  };

  const addToFavorites = (item: Product) => {
    dispatch(addToFavoritesAction(item));
    !item.isFavorite && navigation.navigate('MainTab', {screen: 'Favoriler'});
  };

  const incremetProductAmount = (item: Product) => {
    dispatch(productAmountIncrement(item));
  };

  const decrementProductAmount = (item: Product) => {
    dispatch(productAmountDecrement(item));
  };

  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  return {
    onAddToBasket,
    addToFavorites,
    incremetProductAmount,
    decrementProductAmount,
    visible,
    setVisible,
    toggleBottomNavigationView,
  };
};

export default useProductCardManager;
