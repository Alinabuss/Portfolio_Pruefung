import React from 'react';
import './Bestaetigungsseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Bestaetigungsseite extends React.Component {
    render() {
        return (
            <div className="Bestaetigungsseite">
                <div class="grid-container_Bestaetigung">
                    <div class="Überschrift_Bestaetigung">
                        <h1>Transaktion erfolgreich!</h1>
                    </div>
                    <div class="Feuerwerk_Bestaetigung">
                        <img src="/Bilder/Feuerwerk.png" alt=""/>
                    </div>
                    <div class="Button_Bestaetigung">
                        <NavLink to="/"><button class="button button_bestaetigung">Zur Startseite zurückkehren</button></NavLink>
                    </div>
                </div>
            </div>
          );
    }
}

export default Bestaetigungsseite;