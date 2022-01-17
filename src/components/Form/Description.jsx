import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ state }) {
  const [description, setDescription] = state;
  return (
    <label htmlFor="description">
      <textarea
        id="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </label>
  );
}

Description.propTypes = {
  state: PropTypes.array.isRequired,
};
