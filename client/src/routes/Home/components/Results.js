import React from 'react';
import shuffle from 'lodash.shuffle';
import { Wrap, ResultsWrap, Result, BackgroundImage, ResultOverlay, Heart } from './Results.style';

const Results = (props) => {
  const { searching, artist, albums, favouriteAlbum, unfavouriteAlbum } = props;

  let delayClasses = [];
  props.albums.forEach((album, ind) => delayClasses.push(`anim-delay-${ind * 50}`));
  delayClasses = shuffle(delayClasses);
  
  let title = 'Results';
  if (artist) title = `Results for ${artist.name}`;

  return (
    <Wrap>
      {artist && <h2>{title}</h2>}
      {artist && albums.length < 1 &&
        <p>no results.</p>
      }
      <ResultsWrap>
        {albums.map((album, ind) => {
          const artworkUrl = album.images && album.images[1] && album.images[1].url;
          const heartSvgUrl = album.fav ? 
            "/assets/heart_icon_red.svg" :
            "/assets/heart_icon_white.svg";
          return (
            <Result
              className={`anim-scale-in ${delayClasses[ind]}`}
              key={album.id}
              onClick={(e) => {
                if (album.fav) {
                  unfavouriteAlbum(album);
                } else {
                  favouriteAlbum(album);
                }
              }}
            >
              <BackgroundImage className={`anim-slide-up anim-delay-${ind * 100}`} url={artworkUrl} />
              <ResultOverlay>
                <Heart src={heartSvgUrl} scale={album.fav ? 1 : 0} />
              </ResultOverlay>
            </Result>
          );
        })}
      </ResultsWrap>
    </Wrap>
  );
}

export default Results;