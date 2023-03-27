import React, {useState, useEffect} from 'react'
import { filterFilmsByDirectors } from '../helpers/film.helpers'
import { getListOf, getFilmStats } from '../helpers/film.helpers'
import { Link } from 'react-router-dom'

export default function FilmsPage(props) {
    
  const [list, setList] = useState([])
  const [searchDirector, setSearchDirector] = useState("")

    function getFilms(){
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((res) => res.json())
        .then((films) => {
            return setList(films)})
        .catch((e) => console.error(e))
    }

    useEffect(() => {
      getFilms();
    }, [])

    let filmsByDirector = filterFilmsByDirectors(list, searchDirector)
    let directors = getListOf(list, "director");
    let {avg_score, latest, total} = getFilmStats(filmsByDirector)
  
    return (
        <div>
            <h1>Studio Ghibli Films</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="searchDirector">Filter by Director</label>
                    <select value={searchDirector} onChange={(e)=> setSearchDirector(e.target.value)} name="searchDirector" id="searchDirector">
                        <option value="">All</option>
                        {directors.map((director, idx) => {
                           return <option value={director} key={director + idx}>{director}</option>
                        })}
                    </select>
                </div>
            </form>
                <div>
                    <div>
                        <span># Of Films</span>
                        <span>{total}</span>
                    </div>
                    <div>
                        <span>Average Rating</span>
                        <span>{avg_score.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Latest Film</span>
                        <span>{latest}</span>
                    </div>
                </div>
            <ul>{filmsByDirector.map((film) => <li key={film.id}><Link to={`/films/${film.id}`}>{film.title}</Link></li>)}</ul>
        </div>
    )
  
}