import axios from 'axios';
/* eslint sonarjs/prefer-immediate-return: 0 */
import URL from '../сonstants/url';

const { POSTERS } = URL;

export const swGetData = () => {
  return axios.get(POSTERS);
};
export const swPostPoster = data => {
  return axios({
    method: 'post',
    url: POSTERS,
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const swGetDataById = id => {
  return axios.get(POSTERS + id);
};

export const swEditPoster = (id, data) => {
  return axios.patch(POSTERS + id, data);
};

export const swDeletePoster = ({ id, fileName }) => {
  return axios.delete(POSTERS + id, { data: fileName });
};
