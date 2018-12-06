import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';

// Navigation stack for the Profile tab
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Settings: SettingScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name="person" size={24} color={tintColor} />;
        } else {
          return <Icon name="person-outline" size={24} color={tintColor} />;
        }
      }
    }
  }
);

export default ProfileStack;
