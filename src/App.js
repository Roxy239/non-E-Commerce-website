import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/header';
import Nominies from './components/Nominies/Nominies';

function App() {

  useEffect(() => {
    fetch('./tool.JSON')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])


  return (
    <div className="App">
      <Header></Header>
      <Nominies></Nominies>
    </div>
  );
}

export default App;
