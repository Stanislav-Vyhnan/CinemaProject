import axios from 'axios';
import * as actions from '../components/store/actions';

export function swGetData(dispatch) {
  const getProducts = async () => {
    const { data } = await axios.get('http://localhost:5000/posters/posters');
    console.log(data);
    dispatch(actions.addPostersToStore(data));
  };

  return getProducts();
}

export const swPostData = (url, data) => {
  return axios({
    method: 'post',
    url,
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
