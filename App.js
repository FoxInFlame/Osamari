import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import FeedStack from './src/FeedStack';
import ListStack from './src/ListStack';
import InboxStack from './src/InboxStack';
import ProfileStack from './src/ProfileStack';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/List/reducers';

const store = createStore(reducer);

const BottomTab = createMaterialBottomTabNavigator(
  {
    FeedTab: FeedStack,
    ListTab: ListStack,
    InboxTab: InboxStack,
    ProfileTab: ProfileStack
  },
  {
    initialRouteName: 'FeedTab',
    shifting: true,
    activeColor: '#2e51a2',
    inactiveColor: '#c3c3c3',
    barStyle: { backgroundColor: '#ffffff' }
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator({
    App: BottomTab
  })
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}