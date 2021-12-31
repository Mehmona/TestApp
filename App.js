/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, StatusBar, Platform, UIManager} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import HomeStack from 'src/Navigations/HomeStack';
import {persistor, store} from 'src/Redux/ConfigureStore';
LogBox.ignoreAllLogs();
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar translucent backgroundColor="transparent" />
          <HomeStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
