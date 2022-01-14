import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
import { swGetData } from '../../../service';
import Loading from '../../Loading/Loading';

export default function withLoading(Main) {
  const hocComponent = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
      setIsLoading(false);
      swGetData().then(res => {
        const { data } = res;
        dispatch(actions.addPostersToStore(data));
        setIsLoading(true);
      });
    }, [dispatch]);

    return isLoading ? <Main>{children}</Main> : <Loading />;
  };

  hocComponent.propTypes = {
    children: PropTypes.object.isRequired,
  };

  return hocComponent;
}
