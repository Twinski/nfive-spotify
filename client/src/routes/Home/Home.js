import React, { PureComponent } from 'react';

import SearchBar from 'components/SearchBar';
import { Wrap, SearchTitle, CurrentlyPlayingFavAlbumsWrap } from './Home.style.js';
import Results from './components/ResultsContainer.js';
import FavAlbums from './components/FavAlbumsContainer.js';

class Home extends PureComponent {
  componentDidMount() {
    this.props.searchArtist('elvis presley');
  }

  render() {
    const { searching, searchArtist } = this.props;
    return (
      <Wrap>
        <SearchTitle className="anim-scale-in anim-delay-500">
          Search for an artist
        </SearchTitle>
        <SearchBar
          buttonLabel={searching ? 'Searching' : 'Search'}
          onSearch={searchArtist}
        />
        <Results />
        <CurrentlyPlayingFavAlbumsWrap>
          <FavAlbums />
        </CurrentlyPlayingFavAlbumsWrap>
      </Wrap>
    );
  }
}

export default Home;
