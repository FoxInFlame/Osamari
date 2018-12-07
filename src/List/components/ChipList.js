import React from 'react';

import {
  View,
  Text,
  ScrollView
} from 'react-native';


import { Chip } from 'react-native-paper';

export default class Filters extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View {...this.props}>
        <Text
          style={{
            color: '#c4c4c4',
            marginTop: 8
          }}
        >
          Filter
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          overScrollMode={'never'}
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
          contentContainerStyle={{
            paddingVertical: 6,
            alignItems: 'center'
          }}
        >
          <Chip
            icon="play-arrow"
            onPress={() => console.log('Pressed')}
            mode="outlined"
            theme={{
              colors: {
                text: '#c4c4c4'
              }
            }}
            style={{ marginHorizontal: 2, backgroundColor: '#5f5f5f' }}
          >
            Watching
          </Chip>
          <Chip
            icon="check"
            onPress={() => console.log('Pressed')}
            mode="outlined"
            theme={{
              colors: {
                text: '#c4c4c4'
              }
            }}
            style={{ marginHorizontal: 2, backgroundColor: '#5f5f5f' }}
          >
            Completed
          </Chip>
          <Chip
            icon="pause"
            onPress={() => console.log('Pressed')}
            mode="outlined"
            theme={{
              colors: {
                text: '#c4c4c4'
              }
            }}
            style={{ marginHorizontal: 2, backgroundColor: '#5f5f5f' }}
          >
            On Hold
          </Chip>
          <Chip
            icon="call-missed"
            onPress={() => console.log('Pressed')}
            mode="outlined"
            theme={{
              colors: {
                text: '#c4c4c4'
              }
            }}
            style={{ marginHorizontal: 2, backgroundColor: '#5f5f5f' }}
          >
            Dropped
          </Chip>
          <Chip
            icon="low-priority"
            onPress={() => console.log('Pressed')}
            mode="outlined"
            theme={{
              colors: {
                text: '#c4c4c4'
              }
            }}
            style={{ marginHorizontal: 2, backgroundColor: '#5f5f5f' }}
          >
            Plan to Watch
          </Chip>
        </ScrollView>
      </View>
    );
  }
}
