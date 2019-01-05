export const CALLBACK_SUCCESS = 'CALLBACK_SUCCESS';

export const TOKENS = 'TOKENS';
export const TOKENS_SUCCESS = 'TOKENS_SUCCESS';
export const TOKENS_FAILED = 'TOKENS_FAILED';

export function callbackSuccess(code) {
  return {
    type: CALLBACK_SUCCESS,
    payload: {
      code,
    },
  };
}