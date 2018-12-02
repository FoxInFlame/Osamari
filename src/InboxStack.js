import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import InboxScreen from './screens/InboxScreen';

// Navigation stack for the Profile tab
const InboxStack = createStackNavigator(
  {
    Inbox: InboxScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2e51a2'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    }
  }
);

// Applied after definition to prevent it from affecting children
InboxStack.navigationOptions = {
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="inbox" size={24} color={tintColor} />
  )
};

export default InboxStack;
