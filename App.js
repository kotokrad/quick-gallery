import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { StackNavigator } from 'react-navigation';

import reducers from './app/reducers';
import PictureList from './app/components/PictureList';
import PictureView from './app/components/PictureView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#300',
    paddingTop: 25,
  },
});

const composeStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

const AppNavigator = StackNavigator({
  PictureList: { screen: PictureList },
  PictureView: { screen: PictureView },
}, {
  headerMode: 'none',
});

export default () => (
  <Provider store={composeStoreWithMiddleware(reducers)}>
    <View style={styles.container}>
      <AppNavigator />
    </View>
  </Provider>
);
