import React from 'react';

import { View } from 'react-native';

export default class InboxScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Inbox'
    };
  };

  render() {
    return (<View></View>);
  }
}
