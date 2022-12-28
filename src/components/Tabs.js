import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { DashBoard } from '../screens/Dashboard';
import { QRView } from '../screens/QRView';
import { Wallet } from '../screens/Wallet';
import { TabBarIcon } from './TabBarIcon';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={DashBoard}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={'Home'} />,
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={'Wallet'} />,
                }}
            />
            <Tab.Screen
                name="QRCode"
                component={QRView}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={'QR Code'} />,
                }}
            />
        </Tab.Navigator>
    );
};
