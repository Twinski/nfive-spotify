import React from 'react';

import { Wrap, Title, Thumb, TextWrap, AlbumsWrap, Album, ArtistName, AlbumName, Heart } from './FavAlbums.style';
import FavAlbum from './FavAlbum';

export default (props) => {
  if (props.albums.length === 0) return null;
  return (
    <Wrap>
      <Title>My fav albums</Title>
      <AlbumsWrap>
        {props.albums.map(album => {
          return (
            <FavAlbum
              key={album.id}
              thumbUrl={album.images[2].url}
              artistName={album.artists[0].name}
              albumName={album.name}
              unfavouriteAlbum={() => {
                props.unfavouriteAlbum(album);
              }}
            />
          );
        })}
      </AlbumsWrap>
    </Wrap>
  );
}