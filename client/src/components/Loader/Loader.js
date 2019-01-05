import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

const CircularLoader = styled.div.attrs({
  className: 'loader',
})`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60px;
  width: 60px;

  :after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    border: 5px solid ${props => transparentize(0.8, props.color)};
    border-top-color: ${props => props.color};
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (min-width: ${props => props.theme && props.theme.breakPoints && props.theme.breakPoints.screenMdMin}) {
    ${props => props.dashboard && 'margin-left: 118px;'};
  }
`;

class Loader extends React.PureComponent {
  static defaultProps = {
    dashboard: false,
    color: 'white',
  };

  static propTypes = {
    color: PropTypes.string,
    dashboard: PropTypes.bool,
  };

  render() {
    return (
      <CircularLoader
        color={this.props.color}
        dashboard={this.props.dashboard}
      />
    );
  }
}

export default Loader;
