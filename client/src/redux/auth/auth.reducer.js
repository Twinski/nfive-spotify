import { CALLBACK_SUCCESS, TOKENS, TOKENS_SUCCESS, TOKENS_FAILED } from './auth.actions';

const INITIAL_STATE = {
  code: null,
  accessToken: localStorage.getItem('token'),
  refreshToken: null,
  error: null,
  fetching: false,
};

export default function authReducer(state = INITIAL_STATE, action) {
  if (!action.type || !action.payload) {
    return state;
  }

  switch (action.type) {
    case CALLBACK_SUCCESS:
      return {
        ...state,
        code: action.payload.code,
        error: null,
      };
    case TOKENS:
      return {
        ...state,
        fetching: true,
      };
    case TOKENS_SUCCESS:
      const { accessToken, refreshToken } = action.payload;
      return {
        ...state,
        accessToken,
        refreshToken,
        fetching: false,
      }
    case TOKENS_FAILED:
      const { error } = action.payload;
      return {
        ...state,
        error,
        fetching: false,
      }
    default:
      return state;
  }
}
