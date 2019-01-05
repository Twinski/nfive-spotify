import { fork } from 'redux-saga/effects';

import authSaga from './auth/auth.saga';
import userSaga from './user/user.saga';
import artistSaga from './artist/artist.saga';

export default function* sagas() {
  yield [fork(authSaga)];
  yield [fork(userSaga)];
  yield [fork(artistSaga)];
}
