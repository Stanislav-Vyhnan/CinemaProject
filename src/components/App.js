import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CreatePoster from './CreatePoster/CreatePoster';
import Home from './Home';
import Page from './Page';

import './App.scss';
import PageNotFound from './PageNotFound/PageNotFound';
import Film from './Film/Film';

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="film/:id" element={<Film />} />
            <Route path="create" element={<CreatePoster />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
