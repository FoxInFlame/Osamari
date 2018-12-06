import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ListScreen from './List/ListScreen';

// Navigation stack for the Profile tab
const ListStack = createStackNavigator(
  {
    List: ListScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    },
    navigationOptions: {
      tabBarLabel: 'List',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="sort-variant" size={24} color={tintColor} />
      )
    }
  }
);

export default ListStack;
