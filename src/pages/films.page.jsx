import React, {useState, useEffect} from 'react'
import { filterFilmsByDirectors } from '../helpers/film.helpers'
import { getListOf } from '../helpers/film.helpers'

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
            <ul>{filmsByDirector.map((film) => <li key={film.id}>{film.title}</li>)}</ul>
        </div>
    )
  
}