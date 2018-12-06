import { TOGGLE_FILTERS, CHANGE_HEADER_TITLE } from './actions';
export default function reducer(state = { filterExpanded: false }, action) {
  switch (action.type) {
    case TOGGLE_FILTERS:
      return { ...state, filterExpanded: !state.filterExpanded };
    case CHANGE_HEADER_TITLE:
      return { ...state, headerTitle: action.title };
    default:
      return state;
  }
}
