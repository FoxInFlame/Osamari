import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Feather';

import ProfileScreen from './screens/ProfileScreen';

// Navigation stack for the Profile tab
const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

// Applied after definition to prevent it from affecting children
ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="user" size={24} color={tintColor} />
  ),
  tabBarColor: '#fff'
};

export default ProfileStack;
