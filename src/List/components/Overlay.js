import React from 'react';

import { View, TouchableWithoutFeedback } from 'react-native';

export default class Overlay extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.visible) return null;

    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View {...this.props} style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}