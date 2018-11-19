import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Feather';

import ListScreen from './screens/ListScreen';

// Navigation stack for the Profile tab
const ListStack = createStackNavigator(
  {
    List: ListScreen
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3d3d3d'
      },
      headerTintColor: '#fff'
    }
  }
);

// Applied after definition to prevent it from affecting children
ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={24} color={tintColor} />
  ),
  tabBarColor: '#fff'
};

export default ListStack;
