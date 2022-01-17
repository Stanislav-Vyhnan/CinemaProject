import React from 'react';
import PropTypes from 'prop-types';
import localization from '../../сonstants/localization';

export default function Description({ state }) {
  const [description, setDescription] = state;
  return (
    <label htmlFor="description">
      <textarea
        id="description"
        type="text"
        placeholder={localization.DESCRIPTION}
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </label>
  );
}

Description.propTypes = {
  state: PropTypes.array.isRequired,
};
