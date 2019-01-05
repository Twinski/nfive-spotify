import React from 'react';

import { Wrap, Img, SpotifyTitle } from './SpotifyLogo.style';

const SpotifyLogo = () => (
  <Wrap>
    <Img src="/assets/Spotify_logo_green.png" alt="Green Spotify logo" />
    <SpotifyTitle>Spotify Dashboard</SpotifyTitle>
  </Wrap>
);

export default SpotifyLogo;
