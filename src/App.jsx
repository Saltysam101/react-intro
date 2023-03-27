import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import {HomePage, FilmsPage} from './pages/index.js';

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
        </Routes>
      </Router>
    )
  
}

