import React from 'react';

import { Header } from 'react-navigation';

import {
  View,
  ScrollView,
  Dimensions,
  Text,
  Animated,
  Easing
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { TextInput, Chip } from 'react-native-paper';

import HeaderIcon from './HeaderIcon';

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      expandAnimation: new Animated.Value(76) // Original value
    };

    this._toggleExpand = this._toggleExpand.bind(this);

    // Directly modify headerRight, because if it is done in navigationOptions, it gets complicated
    // when we want to call _toggleExpand().
    this.props.scene.descriptor.options.headerRight = (
      <HeaderIcon onPress={this._toggleExpand}>
        <Icon name="filter-list" size={24} color={'#ffffff'} />
      </HeaderIcon>
    );
  }

  /**
   * Registers the maximum height for the expanded box by calculating the height of the
   * components inside it.
   *
   * @param {*} event
   */
  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  /**
   * Toggles the expanded state of the filter section.
   */
  _toggleExpand() {
    let initialValue = this.state.expanded ? this.state.maxHeight + 76 : 76,
      finalValue = this.state.expanded ? 76 : this.state.maxHeight + 76;

    // Always use setState in places other than the constructor
    this.setState({
      expanded: !this.state.expanded
    });

    // This is directly modifying the Animated value, and not the state value
    this.state.expandAnimation.setValue(initialValue);

    // Start the animation!
    Animated.timing(this.state.expandAnimation, {
      toValue: finalValue,
      duration: 200,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1)
    }).start();
  }

  render() {
    return (
      // Use Animated.View when we have a dynamically changing animated style value
      <Animated.View
        style={{
          height: this.state.expandAnimation,
          width: Dimensions.get('window').width
        }}
      >
        <Header {...this.props} />
        <View
          onLayout={this._setMaxHeight.bind(this)}
          style={{
            backgroundColor: this.props.backgroundColor,
            paddingBottom: 24
          }}
        >
          <TextInput
            theme={{
              colors: {
                placeholder: '#c4c4c4',
                background: '#3d3d3d',
                primary: '#c4c4c4',
                text: '#fff'
              }
            }}
            style={{
              marginHorizontal: 16
            }}
            mode="outlined"
            label="Search"
            value={this.state.valueSearch}
          />
          <View
            style={{
              marginTop: 24,
              marginBottom: 8,
              borderBottomColor: '#5f5f5f',
              borderBottomWidth: 1
            }}
          />
          <Filters
            style={{
              marginHorizontal: 16
            }}
          />
        </View>
      </Animated.View>
    );
  }
}

class Filters extends React.Component {
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
