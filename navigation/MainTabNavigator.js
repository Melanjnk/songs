import React from 'react';
import {Platform, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SingleScreen from '../screens/SingleScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `md-search${focused ? '' : '-outline'}`
                    : 'md-search'
            }
        />
    ),
};

HomeStack.path = '';

const SingleStack = createStackNavigator(
    {
        // Single: SingleScreen,
        Single: {
            screen: SingleScreen,
            /*navigationOptions: ({navigation}) => ({
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image name='android-arrow-back'/>
                        {/!*<Image source={ require('../image/source.png') }/>*!/}
                    </TouchableOpacity>
                )
            })*/

        }
    },
    config
);

SingleStack.navigationOptions = {
    tabBarVisible: true,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}/>
    ),
};

SingleStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};


SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    SingleStack,
    SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
