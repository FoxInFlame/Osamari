import React from 'react';

import {
  ScrollView,
  View,
  RefreshControl,
  Text,
  Dimensions
} from 'react-native';

import { Chip } from 'react-native-paper';

import ToolbarDropdown from './../ToolbarDropdown';
import ListHeader from './../components/ListHeader';

const BACKGROUND_COLOR = '#3d3d3d';

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Watch List',
      headerStyle: {
        // Set backgroundColor here instead of using the `backgroundColor` prop in ListHeader
        // because the Header component ignores all its `style` props
        backgroundColor: BACKGROUND_COLOR,
        elevation: 0
      },
      header: props => (
        <ListHeader backgroundColor={BACKGROUND_COLOR} {...props} />
      )
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: BACKGROUND_COLOR,
            position: 'absolute',
            height: 16,
            width: Dimensions.get('window').width
          }}
        />
        <View
          style={{
            flex: 1,
            elevation: 4,
            backgroundColor: '#ffffff',
            marginTop: 4,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            overflow: 'hidden'
          }}
        >
          <View
            style={{
              backgroundColor: '#ffffff',
              elevation: 2
            }}
          >
            <Text>Notice goes here.</Text>
            <Text>Hi there.</Text>
          </View>
          {/* <View>
            <ToolbarDropdown labels={['test', 'testab']} />
          </View> */}
          <ScrollView
            refreshControl={<RefreshControl refreshing={false} />}
            style={{ flex: 1 }}
          >
            <View style={{ backgroundColor: 'white', height: 500 }} />
            <View style={{ backgroundColor: 'yellow', height: 500 }} />
            <View style={{ backgroundColor: 'red', height: 500 }} />
          </ScrollView>
        </View>
      </View>
    );
  }
}