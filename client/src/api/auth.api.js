import apiManager from './apiManager';
import axios from 'axios';

export const userProfile = () => {
  return apiManager('/me').then(res => res);
}

export const getTokens = ({ code }) => {
  return apiManager(`/callback?code=${code}`).then(res => res);
}

export default {
  userProfile,
  getTokens,
}