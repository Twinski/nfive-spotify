import { select, take, call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './user.actions';
import authApi from '../../api/auth.api';

function* fetchUserFlow(action) {
  try {
    const response = yield call(authApi.userProfile);
    const profile = response.data;
    yield put({ 
      type: FETCH_USER_SUCCESS, 
      payload: { 
        profile,
      }
    });
  } catch (error) {
    yield put({ type: FETCH_USER_FAILED, payload: { error: error.message }});
  }
}

function* userSaga() {
  yield takeLatest(FETCH_USER, fetchUserFlow);
}

export default userSaga;
