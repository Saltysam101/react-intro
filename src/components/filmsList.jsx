import React, {useState, useEffect} from 'react'

export default function FilmsList(props) {
    
  const [list, setList] = useState([])

    function getFilms(){
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((res) => res.json())
        .then((films) => {
            console.log('films', films)
            return setList(films)})
        .catch((e) => console.error(e))
    }

    useEffect(() => {
      getFilms();
    }, [])

    
  
    return (
      <ul>
        {console.log(typeof(list))}
        {list.map((film) => <li key={film.id}>{film.title}</li>)}
      </ul>
    )
  
}
