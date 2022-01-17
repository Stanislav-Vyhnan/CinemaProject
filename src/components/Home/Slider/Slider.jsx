import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
/* eslint import/no-unresolved: 0 */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/virtual';

import './Slider.scss';
import Poster from './Poster/Poster';

export default function Slider({ genres }) {
  const [statePosters, setPosters] = useState([]);
  const films = useSelector(state => state.films);
  useEffect(() => {
    return setPosters(films);
  }, [genres, films]);
  return (
    <>
      {/* eslint react/jsx-boolean-value:0 */}
      <Swiper
        modules={[Navigation, Virtual]}
        className="my-swiper"
        navigation
        loop
        breakpoints={{
          1024: { spaceBetween: 0, slidesPerView: 4 },
          768: { spaceBetween: 0, slidesPerView: 3 },
          430: { spaceBetween: 0, slidesPerView: 2 },
          320: { spaceBetween: 0, slidesPerView: 1 },
        }}
        virtual
      >
        {statePosters.map((el, index) => (
          <SwiperSlide key={el.id} virtualIndex={index}>
            <Poster data={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

Slider.propTypes = {
  genres: PropTypes.string.isRequired,
};
