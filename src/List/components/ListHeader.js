import React from 'react';

import { Header, HeaderTitle } from 'react-navigation';

import { View, Dimensions, Animated, Easing } from 'react-native';

import { connect } from 'react-redux';

import { TextInput } from 'react-native-paper';

import merge from 'lodash/merge';

import ChipList from './ChipList';
import { changeTitle } from '../actions';

class MyTitle extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // Use internal component that react-navigation uses to render header.
    return (
      <HeaderTitle {...this.props}>
        {this.props.headerTitle ? this.props.headerTitle : 'Anime List'}
      </HeaderTitle>
    );
  }
}

const mapStateToTitleProps = state => ({
  headerTitle: state.listScreen.headerTitle
});

const MyConnectedTitle = connect(mapStateToTitleProps)(MyTitle);

export class ListHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expandAnimation: new Animated.Value(76) // Original value
    };

    this._toggleExpand = this._toggleExpand.bind(this);
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
   * Trigger a toggle of the filters when the Redux expanded state changes.
   *
   * @param {*} nextProps
   */
  componentWillReceiveProps(nextProps) {
    // Only toggleExpand if the boolean value is set to something different
    if (nextProps.filterExpanded !== this.props.filterExpanded) {
      this._toggleExpand();
    }
  }

  /**
   * Toggles the expanded state visual and text of the filter section.
   */
  _toggleExpand() {
    let initialValue = this.props.filterExpanded
        ? this.state.maxHeight + 76
        : 76,
      finalValue = this.props.filterExpanded ? 76 : this.state.maxHeight + 76;

    // Trigger Redux Action changeTitle()
    this.props.changeTitle(
      // If currently expanded, next would be closed.
      this.props.filterExpanded ? 'Anime List' : 'Filter Results'
    );

    // This is directly modifying the Animated value, and not the state value
    this.state.expandAnimation.setValue(initialValue);

    // Start the animation!
    Animated.timing(this.state.expandAnimation, {
      toValue: finalValue,
      duration: 400,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1)
    }).start();
  }

  render() {
    // Create merged properties to put in Header. The custom part should be before this.props.
    // In order to put a component as a title, it had to be done here: doing it in navigationOptions
    // was not possible, and using just redux based text in navigationOptions led to huge lag.
    let merged = merge(
      {},
      {
        scene: {
          descriptor: {
            options: {
              headerTitle: MyConnectedTitle
            }
          }
        }
      },
      this.props
    );

    return (
      // Use Animated.View when we have a dynamically changing animated style value
      <Animated.View
        style={{
          height: this.state.expandAnimation,
          width: Dimensions.get('window').width,
          overflow: 'hidden'
        }}
      >
        <Header {...merged} />
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
          <ChipList
            style={{
              marginHorizontal: 16
            }}
          />
        </View>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  filterExpanded: state.listScreen.filterExpanded
});

const mapDispatchToProps = {
  changeTitle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHeader);
