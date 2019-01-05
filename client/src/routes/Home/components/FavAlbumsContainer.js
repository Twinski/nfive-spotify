import { connect } from 'react-redux';
import FavAlbums from './FavAlbums';

import * as userActions from 'redux/user/user.actions';

const mapDispatchToProps = {
  unfavouriteAlbum: userActions.unfavouriteAlbum,
};

export default connect(
  state => ({
    albums: state.user.favAlbums.slice().reverse(),
  }),
  mapDispatchToProps,
)(FavAlbums);
