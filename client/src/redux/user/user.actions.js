export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export const FETCH_FAV_ALBUMS = 'FETCH_FAV_ALBUMS';
export const FETCH_FAV_ALBUMS_SUCCESS = 'FETCH_FAV_ALBUMS_SUCCESS';
export const FETCH_FAV_ALBUMS_FAILED = 'FETCH_FAV_ALBUMS_FAILED';

export const FAVOURITE_ALBUM = 'FAVOURITE_ALBUM';
export const UNFAVOURITE_ALBUM = 'UNFAVOURITE_ALBUM';

export function fetchUser() {
  return {
    type: FETCH_USER,
  };
}

export function favouriteAlbum(album) {
  return {
    type: FAVOURITE_ALBUM,
    payload: { album }
  }
}

export function unfavouriteAlbum(album) {
  return {
    type: UNFAVOURITE_ALBUM,
    payload: { album }
  }
}