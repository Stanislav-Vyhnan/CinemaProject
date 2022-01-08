import React from 'react';
import Navigation from './Navigation/Navigation';
import './Footer.scss';

export default function Footer() {
  const admin = true;
  return (
    <footer>
      <Navigation isAdmin={admin} />
    </footer>
  );
}
