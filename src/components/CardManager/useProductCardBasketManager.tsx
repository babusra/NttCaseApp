import {useDispatch} from 'react-redux';
import {
  productAmountIncrement,
  productAmountDecrement,
} from '../../reduxToolkit/features/MainSlices/ProductSlice';
import {Product} from '../../types/Product/ProductModel';

const useProductCardBasketManager = () => {
  const dispatch = useDispatch();

  const incremetProductAmount = (item: Product) => {
    dispatch(productAmountIncrement(item));
  };

  const decrementProductAmount = (item: Product) => {
    dispatch(productAmountDecrement(item));
  };
  return {
    incremetProductAmount,
    decrementProductAmount,
  };
};

export default useProductCardBasketManager;
