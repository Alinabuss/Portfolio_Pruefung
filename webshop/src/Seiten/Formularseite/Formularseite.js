import React from 'react';
import './Formularseite.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Formularseite extends React.Component {
  render() {
    return (
        <div className="Formularseite">
            <h1>Formularseite</h1>
            <p>Test</p>
            <p><NavLink to="/Bestaetigungsseite">Jetzt kaufen</NavLink></p>
            <p><NavLink to="/Warenkorbseite">Abbrechen</NavLink></p>
        </div>
      );
  }
}

export default Formularseite;