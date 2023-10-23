import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import FilmsList from './components/filmsList.jsx';
import {HomePage, FilmsPage, SingleFilmPage} from './pages/index.js';

export default function App(props) {

    return (
      <Router>
        <nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </nav>
        <Routes>
          <Route Component={HomePage} path="/" exact/>
          <Route Component={FilmsPage} path="films"/>
          <Route Component={SingleFilmPage} path="films/:id"/>
          <Route Component={FilmsList} path="movies" />
        </Routes>
      </Router>
    )
  
}

