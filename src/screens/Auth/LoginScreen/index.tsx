import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import loginStyle from '../../../styles/loginStyle';
import {Screens} from '../../../navigation/Screens';
import {navigation} from '../../../navigation/rootNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../reduxToolkit/store';
import {
  passwordAction,
  usernameAction,
} from '../../../reduxToolkit/features/AuthSlices/LoginSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../utils/Colors';

const LoginScreen: FC = () => {
  const user = useSelector((state: RootState) => state.login.value);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView style={loginStyle.container}>
      <Text style={loginStyle.header}>Giriş Yap</Text>

      <TextInput
        placeholder="Kullanıcı Adı"
        style={loginStyle.input}
        value={user.username}
        onChangeText={(text: string) => {
          dispatch(usernameAction(text));
        }}
      />

      <TextInput
        secureTextEntry
        placeholder="Şifre"
        style={loginStyle.input}
        value={user.password}
        onChangeText={(text: string) => {
          dispatch(passwordAction(text));
        }}
      />
      <View style={loginStyle.remember_button}>
        <Text style={{color: Colors.darkGrey}}>Beni Hatırla</Text>
        <TouchableOpacity style={loginStyle.icon} onPress={()=>setChecked(!checked)} >
          <Icon name="check" size={15} color={checked?Colors.purple:Colors.white} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={loginStyle.button}
        onPress={() => navigation.navigate('MainTab')}>
        <Text style={{color: Colors.white, fontSize: 20}}>Giriş Yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
