import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from '../../../styles/loginStyle';
import {Screens} from '../../../navigation/Screens';
import {navigation} from '../../../navigation/rootNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../reduxToolkit/store';
import {
  passwordAction,
  usernameAction,
} from '../../../reduxToolkit/features/AuthSlices/LoginSlice';

const LoginScreen: FC = () => {
  const user = useSelector((state: RootState) => state.login.value);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Üye Ol</Text>

        <Text style={{color: 'grey'}}>Kullanıcı Adı</Text>
        <TextInput
          style={styles.input}
          value={user.username}
          onChangeText={(text: string) => {
            dispatch(usernameAction(text));
          }}
        />

        <Text style={{color: 'grey'}}>Şifre</Text>
        <TextInput
          style={styles.input}
          value={user.password}
          onChangeText={(text: string) => {
            dispatch(passwordAction(text));
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainTab')}>
          <Text style={{color: Colors.white, fontSize: 20}}>Üye Ol</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
