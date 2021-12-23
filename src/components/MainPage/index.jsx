import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import './index.scss';

export default function MainPage() {
  return (
    <>
      <Header />
      <Carousel />
      <Footer />
    </>
  );
}
