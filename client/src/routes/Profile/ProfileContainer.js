import React from 'react';
import { withSiteData } from 'react-static';
import { compose } from 'redux';
import { connect } from 'react-redux';

import privateRoute from 'routes/privateRoute';
import Dashboard from 'components/Dashboard';
import { fetchUser } from 'redux/user/user.actions';
import { getProfile } from 'redux/user/user.selectors';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }
  render() {
    return (
      <Dashboard>
        <Profile {...this.props} />
      </Dashboard>
    );
  }
};

const mapStateToProps = state => ({
  profile: getProfile(state),
});

const enhancer = compose(
  withSiteData,
  connect(mapStateToProps),
);


export default enhancer(privateRoute(ProfileContainer));
