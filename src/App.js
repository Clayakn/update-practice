import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state={
      text: '',
      editing: false, 
      data: []
    }
  }
  componentDidMount() {
    axios.get('/data').then(response => {
      this.setState({data: response.data})
    })
  }
  handleChange(val) {
    this.setState({
      text: val
    })
  }
  toggle(text) {
    this.setState( prevState => ({
      text,
      editing: !prevState.editing
    }))
  }
  update(id) {
    axios.put(`/put/${id}`, { text: this.state.text }).then(response => {
      this.setState( prevState => ({
        data: response.data,
        editing: !prevState.editing
      }))
    })
  
  }
  render() {
    let displayData = this.state.data.map((element, index) => {
      return (<div key={index}> 
        {this.state.editing ? <input value={this.state.text} onChange={(event) => this.handleChange(event.target.value)}/> : element.text}
        {this.state.editing ? <button onClick={() => this.update(element.id)}>Save</button> : <button onClick={() => this.toggle(element.text)}>Edit</button>}
      </div>
    )})
    return (
      <div className="App">
        
        
        {displayData}
        
        

      </div>
    );
  }
}

export default App;
