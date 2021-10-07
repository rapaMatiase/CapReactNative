import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoinsScreen from './CoinsScreen';

const Stack = createNativeStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Coins" component={CoinsScreen} />
        </Stack.Navigator>
    )
}

export default CoinsStack;