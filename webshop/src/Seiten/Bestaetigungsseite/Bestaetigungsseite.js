import React from 'react';
import './Bestaetigungsseite.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Bestaetigungsseite extends React.Component {
    render() {
        return (
            <div className="Bestaetigungsseite">
                <div class="grid-container_Bestaetigung">
                    <div class="Überschrift_Bestaetigung">Überschrift</div>
                    <div class="Feuerwerk_Bestaetigung">Feuerwerk</div>
                    <div class="Button_Bestaetigung">Button</div>
                </div>
                {/* <h1>Bestaetigungsseite</h1>
                <p>Test</p>
                <p><NavLink to="/">Zur Startseite zurückkehren</NavLink></p> */}
            </div>
          );
    }
}

export default Bestaetigungsseite;