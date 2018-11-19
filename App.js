import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import FeedStack from './src/FeedStack';
import ListStack from './src/ListStack';
import InboxStack from './src/InboxStack';
import ProfileStack from './src/ProfileStack';

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
  }
);

export default BottomTab;