import { connect } from 'react-redux';
import Results from './Results';

import * as userActions from 'redux/user/user.actions';
import { getAlbums } from 'redux/artist/artist.selectors';

const mapDispatchToProps = {
  favouriteAlbum: userActions.favouriteAlbum,
  unfavouriteAlbum: userActions.unfavouriteAlbum,
};

export default connect(
  state => ({
    artist: state.artist.artist,
    albums: getAlbums(state),
    searching: state.artist.searching,
  }),
  mapDispatchToProps,
)(Results);
