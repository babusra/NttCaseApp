import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {sortProducts} from '../../reduxToolkit/features/MainSlices/ProductSlice';

const useProductListManager = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Sırala');
  const sortByType = (type: string) => {
    type === 'Ascending' ? setButtonText('Fiyata Göre Artan') : setButtonText('Fiyata Göre Azalan');
    dispatch(sortProducts(type));
    setVisible(!visible);
  };
  return {
    visible,
    setVisible,
    sortByType,
    buttonText,
  };
};

export default useProductListManager;
