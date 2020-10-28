import React from 'react';
import logo from './logo.svg';
import './App.css';
import DiplayEmployee  from './Components/DisplayEmployee'
import Display from './Components/DisplayEmployee';



class App extends React.Component{
  state = {
    Quote : ''
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(data => {
      this.setState({ Quote : data[0] })
    })
  }
  render() {
    console.log(this.state.Quote);
  return (
    <div className="App">
      <h1>Hello this is Simpsons Quotes </h1>
      <input type='button' value='Nouvelle citation' onClick={this.fetchData}/>
      <Display Quote = {this.state.Quote} />
    </div>
  );
}
}
export default App;