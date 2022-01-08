import React from 'react';
import PropTypes from 'prop-types';

/* eslint import/no-unresolved: 0 */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import poster from '../../../assets/images/poster.jpg';
import './Slider.scss';

export default function Slider({ data }) {
  const { id } = data[0];
  const getId = e => {
    return e.target.id;
  };
  return (
    <>
      {/* <img className="poster" src={poster} alt="Poster" /> */}
      <Swiper
        modules={[Navigation, A11y]}
        className="my-swiper"
        navigation
        spaceBetween={0}
        slidesPerView={4}
      >
        <SwiperSlide>
          <img
            onMouseEnter={getId}
            id={id}
            className="poster"
            src={poster}
            alt="Poster"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onMouseEnter={getId}
            id="2"
            className="poster"
            src={poster}
            alt="Poster"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onMouseEnter={getId}
            id="3"
            className="poster"
            src={poster}
            alt="Poster"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onMouseEnter={getId}
            id="4"
            className="poster"
            src={poster}
            alt="Poster"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onMouseEnter={getId}
            id="5"
            className="poster"
            src={poster}
            alt="Poster"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onMouseEnter={getId}
            id="6"
            className="poster"
            src={poster}
            alt="Poster"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onMouseEnter={getId}
            id="7"
            className="poster"
            src={poster}
            alt="Poster"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

Slider.propTypes = {
  data: PropTypes.array.isRequired,
};
