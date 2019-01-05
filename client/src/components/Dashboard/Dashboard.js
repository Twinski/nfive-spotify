// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withSiteData } from 'react-static';

import Navigation, { Link } from 'components/Navigation';
import { Wrap, ContentWrap } from './Dashboard.style';
import { getToken } from '../../redux/auth/auth.selectors';

type Props = {
  routes: Array<{
    inNavigation: boolean,
    path: string,
    name: string,
  }>,
};

class Dashboard extends PureComponent<Props> {
  render() {
    const { routes } = this.props;
    return (
      <Wrap>
        <Navigation>
          {routes.map(
            route =>
              route.inNavigation && (
                <Link key={route.path} to={route.path}>
                  {route.name}
                </Link>
              ),
          )}
        </Navigation>
        <ContentWrap>{this.props.children}</ContentWrap>
      </Wrap>
    );
  }
}

const DashboardContainer = connect(
  (state) => {
    return {
      token: getToken(state),
    }
  },
  null,
)(Dashboard);

export default withSiteData(DashboardContainer);
