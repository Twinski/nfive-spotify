import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import userReducer from './user/user.reducer';
import artistReducer from './artist/artist.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  artist: artistReducer,
});

export default rootReducer;
