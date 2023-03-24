import React, { useState } from 'react'
import FilmsList from './components/filmsList.jsx'

export default function App(props) {

  const [list, setList] = useState(["ready", "set", "go"]);
  const [text, setText] = useState("")

 function  onSubmit(submitEvent){
    submitEvent.preventDefault();
    let newList = [...list, text]
    setList({list: newList, text: ""})
  }
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={onSubmit}>
          <input 
          value={text}
          name="text" 
          type="text"
          id='text'
          onChange={(e) => {
            setText({text : e.target.value})
          }} />
          <button type="submit">Add</button>
        </form>
        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>
          })}
        </ul>
        <FilmsList/>
      </div>
    )
  
}

