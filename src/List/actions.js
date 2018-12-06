export const TOGGLE_FILTERS = 'expand';
export const CHANGE_HEADER_TITLE = 'change header title';

export function toggleFilters() {
  return {
    type: TOGGLE_FILTERS,
    payload: {}
  };
}

export function changeTitle(title) {
  return {
    type: CHANGE_HEADER_TITLE,
    title // This will add 'title' with value of title.
  }
}