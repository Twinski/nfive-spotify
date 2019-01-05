/**
 * State selectors
 *
 */

import deepValue from 'deep-value';


export const getCallbackCode = state => state && state.auth && state.auth.code;
export const getToken = state => state && state.auth && state.auth.accessToken;

export const getAlbums = state => {
  let albums = deepValue(state, 'artist.albums') || [];
  const favAlbums = deepValue(state, 'user.favAlbums') || [];
  albums = albums.map(album => ({
    ...album,
    fav: favAlbums.filter(a => a.id === album.id).length > 0,
  }));
  return albums;
}

