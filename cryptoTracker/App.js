/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from 'cryptoTracker/src/components/coins/CoinsStack'

const App: () => Node = () => {
  

  return (
    <NavigationContainer>
        <CoinsStack />
    </NavigationContainer>
  );
};


export default App;
