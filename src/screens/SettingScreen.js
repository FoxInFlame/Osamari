import React from 'react';

import { View } from 'react-native';

export default class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings'
    };
  };

  render() {
    return <View />;
  }
}
