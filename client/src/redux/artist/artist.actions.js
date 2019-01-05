export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';

export function search(keyword) {
  return {
    type: SEARCH,
    payload: {
      keyword,
    },
  };
}