import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import {getAllProduct} from '../../../api/url';
import {Product} from '../../../types/Product/ProductModel';
import {useDispatch, useSelector} from 'react-redux';
import {allProductAction} from '../../../reduxToolkit/features/MainSlices/ProductSlice';
import {RootState} from '../../../reduxToolkit/store';

const useProductListManager = () => {
  // const [products, setProducts] = React.useState<Product[]>([]);
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.value.allProducts);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(getAllProduct)
      .then((res: any) => {
        setIsLoading(false);
        dispatch(allProductAction(res?.data));
      })
      .catch((err: any) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return {
    isLoading,
    products
  };
};

export default useProductListManager;
