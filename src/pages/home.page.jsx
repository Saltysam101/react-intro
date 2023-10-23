import React, { useState } from 'react'

export default function HomePage(props) {

  const [list, setList] = useState(["ready", "set", "go"]);
  const [text, setText] = useState("")

 function  onSubmit(submitEvent){
    submitEvent.preventDefault();
    let newList = [...list, text]
    setList(newList)
    setText(text)
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
            setText(e.target.value)
          }} />
          <button type="submit">Add</button>
        </form>
        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>
          })}
        </ul>
      </div>
    )
  
}