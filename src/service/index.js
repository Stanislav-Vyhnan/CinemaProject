import axios from 'axios';
/* eslint sonarjs/prefer-immediate-return: 0 */

const POSTERS_URL = 'http://localhost:5000/posters/';

export const swGetData = () => {
  return axios.get(POSTERS_URL);
};
export const swPostPoster = data => {
  return axios({
    method: 'post',
    url: POSTERS_URL,
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const swGetDataById = id => {
  return axios.get(POSTERS_URL + id);
};

export const swEditPoster = (id, data) => {
  return axios.patch(POSTERS_URL + id, data);
};

export const swDeletePoster = ({ id, fileName }) => {
  return axios.delete(POSTERS_URL + id, { data: fileName });
};
