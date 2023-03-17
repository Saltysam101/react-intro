import React, { Component } from 'react'

export default class FilmsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            list: []
        }
    }

    getFilms(){
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((res) => res.json())
        .then((films) => {
            return this.setState({list: films})})
        .catch((e) => console.error(e))
    }

    componentDidMount(){
        console.log("comp mounted")
        this.getFilms();
    }
  render() {
    return (
      <ul>{this.state.list.map((film) => <li key={film.id}>{film.title}</li>)}</ul>
    )
  }
}
