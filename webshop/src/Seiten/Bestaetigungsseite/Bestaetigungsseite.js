import React from 'react';
import './Bestaetigungsseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Überschrift from '../Seitenuebergreifende_Elemente/Überschrift';

class Bestaetigungsseite extends React.Component {
    render() {
        return (
            <div className="Bestaetigungsseite">
                <div class="grid-container_Bestaetigung">
                    <Überschrift Text="Transaktion erfolgreich!"/>
                    <div class="Wein_Bestaetigung">
                        <img src="/Bilder/Wein.png" alt=""/>
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