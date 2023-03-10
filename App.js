import React from 'react';
//  import logo from './logo.svg';
import './App.css';

const name = <span>Hello React</span>;

const newElement = React.createElement('h2',{className:'newElement'},'Hello h2 tag')

const test = ()=>{
  alert("Hello Ram");
}

const age = (a)=>{
  if(age > 18){
    return <span>You are eligible</span>
  } else{
    return<span>You are not eligible</span>
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello Ram , {name}</h1>
      {newElement}
      <button onClick={test}></button>
      {age(19)}
    </div>
  );
}

export default App;
