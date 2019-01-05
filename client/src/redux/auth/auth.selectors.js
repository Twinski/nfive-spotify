/**
 * State selectors
 *
 */

export const getCallbackCode = state => state && state.auth && state.auth.code;
export const getToken = state => state && state.auth && state.auth.accessToken;