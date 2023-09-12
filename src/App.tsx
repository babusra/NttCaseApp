import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './reduxToolkit/store';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={Store}>
        <Navigation />
      </Provider>
    </React.Fragment>
  );
};

export default App;
