import axios from 'axios';
import * as actions from '../components/store/actions';

export function swGetData(dispatch) {
  const getProducts = async () => {
    const { data } = await axios.get('http://localhost:5000/poster');
    dispatch(actions.addPostersToStore(data));
  };

  return getProducts();
}

export const swPostData = async (data, url) => {
  await axios.post(url, {
    ...data,
  });
};
