import React from 'react';

import {
  View,
  Dimensions
} from 'react-native';

export default class BackdropContent extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: this.props.backgroundColor,
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
          {this.props.children}
        </View>
      </View>
    );
  }
} 