import {useDispatch, useSelector} from 'react-redux';
import {addToFavoritesAction} from '../../reduxToolkit/features/MainSlices/ProductSlice';
import {RootState} from '../../reduxToolkit/store';
import {Product} from '../../types/Product/ProductModel';

const useProductCardFavoritesManager = (product: Product) => {
  const dispatch = useDispatch();

  const addToFavorites = (item: Product) => {
    dispatch(addToFavoritesAction(item));
  };

  const products = useSelector(
    (state: RootState) => state.product.value.allProducts,
  );
  const isFav = products.find(item => item.id === product.id)?.isFavorite;
  return {
    addToFavorites,
    isFav
  };
};

export default useProductCardFavoritesManager;
