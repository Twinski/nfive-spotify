import styled from 'styled-components';

export const Album = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  height: 80px;
  width: 315px;
  margin-bottom: 10px;
  margin-right: 10px;
  // box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  padding: 10px;
  background: #eee;
  border-radius: 5px;
`;

export const Thumb = styled.div`
  flex: 0 0 auto;
  display: block;
  width: 60px;
  height: 60px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
`;

export const TextWrap =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const AlbumName = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 3px;
`;

export const ArtistName = styled.p`
  font-size: 12px;
  color: #999;
  margin: 0;
`;

export const Heart = styled.img`
  display: block;
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
`;