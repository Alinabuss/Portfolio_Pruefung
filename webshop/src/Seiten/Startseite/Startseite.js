import React from 'react';
import './Startseite.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Startseite extends React.Component {
    render() {
      return (
          <div className="Startseite">
              <h1>Startseite</h1>
              <p>Test</p>
              <p><NavLink to="/Warenkorbseite">Warenkorb ansehen</NavLink></p>
              <p><NavLink to="/Warenkorbseite">Zum Warenkorb hinzufügen</NavLink></p>
          </div>
        );
    }
  }
  
  export default Startseite;