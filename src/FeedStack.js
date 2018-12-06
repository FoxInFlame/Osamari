import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FeedScreen from './screens/FeedScreen';

// Navigation stack for the Profile tab
const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: '#00e',
        fontWeight: 'normal'
      }
    },
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name="home" size={24} color={tintColor} />;
        } else {
          return <Icon name="home-outline" size={24} color={tintColor} />;
        }
      }
    }
  }
);

export default FeedStack;
