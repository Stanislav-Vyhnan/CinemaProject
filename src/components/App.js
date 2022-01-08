import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CreatePoster from './CreatePoster/CreatePoster';
import UserPosters from './UserPosters/UserPosters';
import Posters from './Posters';
import Page from './Page';
import swGetData from '../service/swGetData';
import './App.scss';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    return swGetData(dispatch);
  }, [dispatch]);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            {/* <Route index element={<Carousel />} /> */}
            <Route path="create" element={<CreatePoster />} />
            <Route path="posters" element={<Posters />} />
            <Route path="userPosters" element={<UserPosters />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
