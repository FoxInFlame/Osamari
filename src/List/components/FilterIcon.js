import React from 'react';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

export class FilterIcon extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <Icon name={this.props.filterExpanded ? 'close' : 'filter-list'} size={24} color={'#ffffff'} />;
  }
}

const mapStateToProps = state => ({
  filterExpanded: state.filterExpanded
});

export default connect(
  mapStateToProps
)(FilterIcon);