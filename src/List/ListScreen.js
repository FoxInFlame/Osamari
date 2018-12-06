import React from 'react';

import {
  ScrollView,
  View,
  RefreshControl,
  Text,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux';

import HeaderIcon from './components/HeaderIcon';
import FilterIcon from './components/FilterIcon';
import ListHeader from './components/ListHeader';
import { toggleFilters } from './actions';

const BACKGROUND_COLOR = '#3d3d3d';

export class ListScreen extends React.Component {
  constructor(props) {
    /*
    Because this component is connected to the store, this.props also contains:
    - toggleFilters() => dispatches List/TOGGLE_FILTERS
    - headerTitle => contains current title

    */
    super(props);
  }

  /**
   * Register the toggleFilter() Redux function in the navigation params so that it can be called
   * from within the static navigationOptions headerRight.
   */
  componentDidMount() {
    this.props.navigation.setParams({
      toggleFilters: this.props.toggleFilters
    });
  }


  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      // Title can become 'Filter Results' in ListHeader
      title: 'Anime List',
      headerStyle: {
        // Set backgroundColor here instead of using the `backgroundColor` prop in ListHeader
        // because the Header component ignores all its `style` props
        backgroundColor: BACKGROUND_COLOR,
        elevation: 0
      },
      headerRight: (
        <HeaderIcon onPress={params.toggleFilters}>
          <FilterIcon />
        </HeaderIcon>
      ),
      header: props => (
        <ListHeader backgroundColor={BACKGROUND_COLOR} {...props} />
      )
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: BACKGROUND_COLOR,
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
          
          {/* <View>
            <ToolbarDropdown labels={['test', 'testab']} />
          </View> */}
          <ScrollView
            refreshControl={<RefreshControl refreshing={false} />}
            style={{ flex: 1 }}
          >
            <View style={{ backgroundColor: 'white', height: 500 }} />
            <View style={{ backgroundColor: 'yellow', height: 500 }} />
            <View style={{ backgroundColor: 'red', height: 500 }} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  filterExpanded: state.filterExpanded,
  headerTitle: state.headerTitle
});

const mapDispatchToProps = {
  toggleFilters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen);
