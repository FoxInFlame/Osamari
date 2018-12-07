import { TOGGLE_FILTERS, CHANGE_HEADER_TITLE } from './actions';

const defaultListState = {
  filterExpanded: false
};

export default function reducer(
  state = { listScreen: defaultListState },
  action
) {
  switch (action.type) {
    case TOGGLE_FILTERS:
      return {
        ...state,
        listScreen: {
          ...state.listScreen,
          filterExpanded: !state.listScreen.filterExpanded
        }
      };
    case CHANGE_HEADER_TITLE:
      return {
        ...state,
        listScreen: {
          ...state.listScreen,
          headerTitle: action.title
        }
      };
    default:
      return state;
  }
}
