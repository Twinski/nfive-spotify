import React, { PureComponent } from 'react';

import SpotifyLogo from 'components/SpotifyLogo';
import { Wrap, Controls, ListItem } from './Navigation.style';

class Dashboard extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <Wrap>
        <SpotifyLogo />
        <Controls>
          {React.Children.map(
            children,
            child => child && <ListItem>{child}</ListItem>,
          )}
        </Controls>
      </Wrap>
    );
  }
}

export default Dashboard;
