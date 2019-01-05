import React from 'react';
import { compose } from 'redux';
import { withSiteData } from 'react-static';
import { connect } from 'react-redux';

import privateRoute from '../privateRoute';
import Dashboard from 'components/Dashboard';
import Home from './Home';
import * as artistActions from 'redux/artist/artist.actions';

class HomeContainer extends React.Component {
  render() {
    return (
      <Dashboard>
        <Home {...this.props} />
      </Dashboard>
    );
  }
};

const mapStateToProps = state => ({
  searching: state.artist.searching,
});

const mapDispatchToProps = {
  searchArtist: artistActions.search,
};

const enhancer = compose(
  withSiteData,
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhancer(privateRoute(HomeContainer));
