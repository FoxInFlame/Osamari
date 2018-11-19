import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Feather';

import FeedScreen from './screens/FeedScreen';

// Navigation stack for the Profile tab
const FeedStack = createStackNavigator({
  Feed: FeedScreen
});

// Applied after definition to prevent it from affecting children
FeedStack.navigationOptions = {
  tabBarLabel: 'Feed',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={24} color={tintColor} />
  ),
  tabBarColor: '#fff'
};

export default FeedStack;
