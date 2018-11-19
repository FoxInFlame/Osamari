import React from 'react';

import { View } from 'react-native';

export default class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Feed'
    };
  };

  render() {
    return (<View></View>);
  }
}
