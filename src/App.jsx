import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)

   this.state = {
    list: ["ready", "set", "go"],
    text: ""
   }

   this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(submitEvent){
    submitEvent.preventDefault();
    let newList = [...this.state.list, this.state.text]
    this.setState({list: newList, text: ""})
  }
  render() {
    return (
      <div>

        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input 
          value={this.state.text}
          name="text" 
          type="text"
          id='text'
          onChange={(e) => {
            this.setState({text : e.target.value})
          }} />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

