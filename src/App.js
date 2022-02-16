import React from 'react';
import './App.css';
import { Example3 } from './components/Example3';
import Example4 from './components/Example4';

const Example = () => {
  return(
    <h3>Hello world</h3>
  )
}
const Example2 = (props) => {
  return(
    <h3>Hello {props.name}</h3>
  )
}

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Example /> 
        <h1>Hello world</h1>
        <Example />
        <Example />  
        <Example2 name = "Sasha" /> 
        <Example3 />
        <Example4 />
      </div>
    );
  }
  
}

export default App;
