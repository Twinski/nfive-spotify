import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  FAVOURITE_ALBUM,
  UNFAVOURITE_ALBUM,
} from './user.actions';

const INITIAL_STATE = {
  error: null,
  profile: null,
  favAlbums: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
  if (!action.type || !action.payload) {
    return state;
  }

  switch (action.type) {
    case FETCH_USER_SUCCESS:
      const { profile } = action.payload;
      return {
        ...state,
        profile,
      }
    case FETCH_USER_FAILED:
      const { error } = action.payload;
      return {
        ...state,
        profile: null,
        error,
      }
    case FAVOURITE_ALBUM:
      let favAlbums = state.favAlbums.slice();
      favAlbums.push(action.payload.album);
      return {
        ...state,
        favAlbums,
      };
    case UNFAVOURITE_ALBUM:
      favAlbums =
        state.favAlbums
          .slice()
          .filter(favAlbum => favAlbum.id !== action.payload.album.id);
      return {
        ...state,
        favAlbums,
      };
    default:
      return state;
  }
}
