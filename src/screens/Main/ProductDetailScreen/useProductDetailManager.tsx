import {useDispatch, useSelector} from 'react-redux';
import { navigation } from '../../../navigation/rootNavigation';
import {
  addToBasketAction,
  addToFavoritesAction,
} from '../../../reduxToolkit/features/MainSlices/ProductSlice';
import {RootState} from '../../../reduxToolkit/store';
import {Product} from '../../../types/Product/ProductModel';

const useProductDetailManager = (product: Product) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product.value.allProducts,
  );

  const onAddToBasket = (item: Product) => {
    dispatch(addToBasketAction(item));
    navigation.navigate("MainTab", {screen:'Sepetim'})
  };

  const addToFavorites = (item: Product) => {
    dispatch(addToFavoritesAction(item));
  };

  const isFav = products.find(item => item.id === product.id)?.isFavorite;
  return {
    onAddToBasket,
    addToFavorites,
    isFav
  };
};

export default useProductDetailManager;
