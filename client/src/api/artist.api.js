import deepValue from 'deep-value';
import apiManager from './apiManager';

export const search = ({ keyword }) => {
  return apiManager(`/search?q=${keyword}&type=artist`)
    .then(res => deepValue(res, 'data.artists.items') || []);
}

export const getAlbums = ({ artistId }) => {
  return apiManager(`/artists/${artistId}/albums`)
    .then(res => deepValue(res, 'data.items') || []);
}
