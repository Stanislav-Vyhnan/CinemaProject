import React from 'react';
import PropTypes from 'prop-types';
import withLoading from './hoc/withLoading';

function Main({ children }) {
  return <main>{children}</main>;
}

export default withLoading(Main);

Main.propTypes = {
  children: PropTypes.object.isRequired,
};
