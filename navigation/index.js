import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
import TransactionDetailsScreen from "../screens/TransactionDetailsScreen";
import TransactionsScreen from "../screens/TransactionsScreen";

const {Navigator, Screen} = createStackNavigator();
export const RootNav = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName={'TransactionsScreen'}>
                <Screen
                    options={{
                        headerShown: false
                    }}
                    name="TransactionsScreen"
                    component={TransactionsScreen}/>
                <Screen
                    options={{
                        headerShown: false
                    }}
                    name="TransactionDetailsScreen"
                    component={TransactionDetailsScreen}/>
            </Navigator>
        </NavigationContainer>
    );
};

