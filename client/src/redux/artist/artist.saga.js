import { call, put, takeLatest } from 'redux-saga/effects';

import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILED } from './artist.actions';
import * as artistApi from 'api/artist.api';

function* searchArtist(action) {
  try {
    const artists = yield call(artistApi.search, { keyword: action.payload.keyword });
    const artist = artists.length ? artists[0] : null;
    let albums = [];
    if (artist) {
      albums = yield call(artistApi.getAlbums, { artistId: artist.id });
      albums = albums.slice(0, 6);
    }
    yield put({ 
      type: SEARCH_SUCCESS, 
      payload: { artist, albums },
    });
  } catch (error) {
    yield put({ type: SEARCH_FAILED, payload: { error: error.message }});
  }
}


function* artistSaga() {
  yield takeLatest(SEARCH, searchArtist);
}

export default artistSaga;
