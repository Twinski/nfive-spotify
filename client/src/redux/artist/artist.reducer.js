import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILED } from './artist.actions';

const INITIAL_STATE = {
  searchKeyword: '',
  searching: false,
  artist: null,
  albums: [],
  error: null,
};

export default function artistReducer(state = INITIAL_STATE, action) {
  if (!action.type || !action.payload) {
    return state;
  }

  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchKeyword: action.payload.keyword,
        searching: true,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        artist: action.payload.artist,
        albums: action.payload.albums,
        searching: false,
      }
    case SEARCH_FAILED:
      const { error } = action.payload;
      return {
        ...state,
        error,
        searching: false,
      }
    default:
      return state;
  }
}
