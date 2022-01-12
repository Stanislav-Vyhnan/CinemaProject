import React from 'react';
import PropTypes from 'prop-types';

export default function Pictures({ setImg }) {
  const saveImg = e => {
    setImg(e.target.files[0]);
  };
  return (
    <>
      <section>
        <h4>Add picture for poster</h4>
        <label htmlFor="addPoster">
          <input
            id="addPoster"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={saveImg}
          />
        </label>
      </section>
    </>
  );
}

Pictures.propTypes = {
  setImg: PropTypes.func.isRequired,
};
