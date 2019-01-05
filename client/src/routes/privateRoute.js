import React from 'react';
import { connect } from 'react-redux';

import { getCallbackCode, getToken } from '../redux/auth/auth.selectors';
import { API_BASE } from '../config';
import Loader from 'components/Loader';
import CenteredScreen from 'components/CenteredScreen';


export default (Component) => {
  class PrivateScreen extends React.Component {
    componentDidMount() {
      if (!this.props.token) {
        window.location.href = `${API_BASE}/login`;
      }
    }
    render() {
      const { token } = this.props;
      if (!token) {
        return (
          <CenteredScreen>
            <Loader color="#000" />
          </CenteredScreen>
        );
      };
      return <Component {...this.props} />;
    }
  }
  return connect(
    state => ({
      code: getCallbackCode(state),
      token: getToken(state),
    }),
  )(PrivateScreen);
}
