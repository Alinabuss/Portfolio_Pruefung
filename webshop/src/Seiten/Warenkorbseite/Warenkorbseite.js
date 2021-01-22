import React from 'react';
import './Warenkorbseite.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Warenkorbseite extends React.Component {
    render() {
        return (
            <div className="Warenkorbseite">
                <h1>Warenkorbseite</h1>
                <p>Test</p>
                <p><NavLink to="/">Weiter shoppen</NavLink></p>
                <p><NavLink to="/Formularseite">Jetzt bezahlen</NavLink></p>
                
            </div>
          );
    }
}

export default Warenkorbseite;