import React from 'react';

import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { Chip } from 'react-native-paper';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.goSettings = this.goSettings.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile'
    };
  };

  goSettings() {
    this.props.navigation.navigate('Settings');
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12
  },
  chip: {
    margin: 4
  }
});
