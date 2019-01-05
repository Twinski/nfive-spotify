import { call, put, takeLatest } from 'redux-saga/effects';

import history from '../../history';
import { CALLBACK_SUCCESS, TOKENS, TOKENS_SUCCESS, TOKENS_FAILED } from './auth.actions';
import authApi from 'api/auth.api';

function* fetchTokensFlow(action) {
  try {
    yield put({ type: TOKENS });
    const response = yield call(authApi.getTokens, action.payload);
    const { accessToken, refreshToken } = response.data;
    yield put({ 
      type: TOKENS_SUCCESS, 
      payload: { 
        accessToken,
        refreshToken,
      }
    });
    localStorage.setItem('token', accessToken);
    yield call(history.push, '/');
  } catch (error) {
    yield put({ type: TOKENS_FAILED, payload: { error: error.message }});
  }
}

function* authSaga() {
  yield takeLatest(CALLBACK_SUCCESS, fetchTokensFlow);
}

export default authSaga;
