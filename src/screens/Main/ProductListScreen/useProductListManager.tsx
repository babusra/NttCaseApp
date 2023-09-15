import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import {getAllProduct} from '../../../api/url';
import {Product} from '../../../types/Product/ProductModel';
import {useDispatch, useSelector} from 'react-redux';
import {allProductAction} from '../../../reduxToolkit/features/MainSlices/ProductSlice';
import {RootState} from '../../../reduxToolkit/store';
import {setHasRequested} from '../../../reduxToolkit/features/MainSlices/RequestSlice';

const useProductListManager = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product.value.allProducts,
  );
  const hasRequested = useSelector(
    (state: RootState) => state.request.value.hasRequested,
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    if (!hasRequested) {
      setIsLoading(true);
      axios
        .get(getAllProduct)
        .then((res: any) => {
          setIsLoading(false);
          dispatch(setHasRequested(true));
          dispatch(allProductAction(res?.data));
        })
        .catch((err: any) => {
          setIsLoading(false);
          dispatch(setHasRequested(true));

          console.log(err);
        });
    }
  }, []);



  return {
    isLoading,
    products,
  };
};

export default useProductListManager;
