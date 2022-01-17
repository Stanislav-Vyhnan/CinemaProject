import React from 'react';
import PropTypes from 'prop-types';

export default function PosterInput({ data }) {
  return (
    <label htmlFor={data.id}>
      <input
        type="text"
        placeholder={data.name}
        value={data.value}
        onChange={e => data.change(e.target.value)}
      />
    </label>
  );
}

PosterInput.propTypes = {
  data: PropTypes.object.isRequired,
};
