import React from 'react';
import './App.css';
import AppBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
     <AppBar />
     <ItemListContainer />
    </div>
  );
}

export default App;
