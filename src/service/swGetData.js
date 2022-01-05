import axios from 'axios';
import * as actions from '../components/store/actions';

export default function swGetData(dispatch) {
  const getProducts = async () => {
    const { data } = await axios.get('http://localhost:5000/posters');
    dispatch(actions.addPostersToStore(data));
  };

  return getProducts();
}
