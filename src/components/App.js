import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CreatePoster from './CreatePoster/CreatePoster';
import Home from './Home';
import Page from './Page';
import { swGetData } from '../service';
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
            <Route index element={<Home />} />
            <Route path="create" element={<CreatePoster />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
