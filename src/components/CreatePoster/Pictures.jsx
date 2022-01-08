import React from 'react';
import PropTypes from 'prop-types';

export default function Pictures({ dataRef }) {
  const [posterInpRef, addPictInpRef] = dataRef;
  return (
    <>
      <input type="file" accept=".png, .jpg, .jpeg" ref={posterInpRef} />
      <span>Poster</span>
      <br />
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        ref={addPictInpRef}
        multiple
      />
      <span>Additional pictures</span>
      <br />
    </>
  );
}

Pictures.propTypes = {
  dataRef: PropTypes.array.isRequired,
};
