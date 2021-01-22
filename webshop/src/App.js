import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import Bestaetigungsseite from './Seiten/Bestaetigungsseite/Bestaetigungsseite';
import Formularseite from './Seiten/Formularseite/Formularseite'
import Startseite from './Seiten/Startseite/Startseite'
import Warenkorbseite from './Seiten/Warenkorbseite/Warenkorbseite'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Produktseite</h1>
    //     <p>Test</p>
    //   </header>
    // </div>
    <Router>
      <Route path='/' exact component = {Startseite}/>
      <Route path='/Warenkorbseite' exact component = {Warenkorbseite}/>
      <Route path='/Formularseite' exact component = {Formularseite}/>
      <Route path='/Bestaetigungsseite' exact component = {Bestaetigungsseite}/>
    </Router>
  );
}

export default App;
