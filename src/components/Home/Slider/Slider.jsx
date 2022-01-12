import React from 'react';
// import PropTypes from 'prop-types';

/* eslint import/no-unresolved: 0 */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

import poster from '../../../assets/images/poster.jpg';
import './Slider.scss';
import Poster from './Poster/Poster';

export default function Slider(/* { data } */) {
  // const { id } = data[0];
  // const getId = e => {
  //   return e.target.id;
  // };
  const data = [
    { id: 1, src: poster },
    { id: 2, src: poster },
    { id: 3, src: poster },
    { id: 4, src: poster },
    { id: 5, src: poster },
    { id: 6, src: poster },
    { id: 7, src: poster },
  ];
  return (
    <>
      {/* <img className="poster" src={poster} alt="Poster" /> */}
      <Swiper
        modules={[Navigation, Virtual]}
        className="my-swiper"
        navigation
        breakpoints={{
          320: { spaceBetween: 0, slidesPerView: 1 },
          510: { spaceBetween: 0, slidesPerView: 2 },
          768: { spaceBetween: 0, slidesPerView: 3 },
          1024: { spaceBetween: 0, slidesPerView: 4 },
        }}
        virtual
      >
        {data.map((el, index) => (
          <SwiperSlide key={el.id} virtualIndex={index}>
            <Poster data={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// Slider.propTypes = {
//   data: PropTypes.array.isRequired,
// };
