import { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withSiteData } from 'react-static';
import qs from 'query-string';
import { callbackSuccess } from 'redux/auth/auth.actions';

class CallbackContainer extends PureComponent {
  componentDidMount() {
    this.getTokens();
  }

  getTokens = () => {
    const params = qs.parse(window.location.search);
    this.props.dispatchCallbackSuccess(params.code);
  };

  render() {
    return null;
  }
}

const mapDispatchToProps = {
  dispatchCallbackSuccess: callbackSuccess,
};

const enhancer = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withSiteData,
);

export default enhancer(CallbackContainer);
