import React from 'react';

import { View } from 'react-native';

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'List'
    };
  };

  render() {
    return (<View></View>);
  }
}
