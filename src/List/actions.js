export const TOGGLE_FILTERS = 'LIST::TOGGLE_FILTERS';
export const CHANGE_HEADER_TITLE = 'LIST::CHANGE_HEADER_TITLE';

export function toggleFilters() {
  return {
    type: TOGGLE_FILTERS
  };
}

export function changeTitle(title) {
  return {
    type: CHANGE_HEADER_TITLE,
    title // This will add 'title' with value of title.
  };
}
