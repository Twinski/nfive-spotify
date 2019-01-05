import React from 'react';
import ellipsize from 'ellipsize';

import { Thumb, TextWrap, Album, ArtistName, AlbumName, Heart } from './FavAlbum.style';


export default (props) => {
  const { thumbUrl, albumName, artistName, unfavouriteAlbum } = props;
  return (
    <Album className="anim-slide-up-10">
      <Thumb url={thumbUrl} className="anim-scale-in anim-delay-250" />
      <TextWrap>
        <AlbumName>{ellipsize(albumName, 60)}</AlbumName>
        <ArtistName>{ellipsize(artistName, 30)}</ArtistName>
      </TextWrap>
      <Heart src="/assets/heart_icon_red.svg" onClick={unfavouriteAlbum} />
    </Album>
  );
}