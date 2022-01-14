import axios from 'axios';
/* eslint sonarjs/prefer-immediate-return: 0 */

const POSTERS_URL = 'http://localhost:5000/posters/';

export const swGetData = async () => {
  const data = await axios.get('http://localhost:5000/posters/posters');
  return data;
};

export const swPostData = (url, data) => {
  return axios({
    method: 'post',
    url,
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const swGetDataById = id => {
  return axios.get(POSTERS_URL + id);
};

export const swDeletePoster = ({ id, fileName }) => {
  console.log(id, fileName);
  return axios.delete(POSTERS_URL + id, { params: fileName, id });
};
