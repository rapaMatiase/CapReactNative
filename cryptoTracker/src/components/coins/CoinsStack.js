import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoinsScreen from './CoinsScreen';
import CoinsDetailScreen from './CoinDEtailScreen';

const Stack = createNativeStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Coins" component={CoinsScreen} />
            <Stack.Screen name="CoinDetail" component={CoinsDetailScreen} />
        </Stack.Navigator>
    )
}

export default CoinsStack;