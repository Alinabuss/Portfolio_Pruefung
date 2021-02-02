import React from 'react';
import './Formularseite.css';
import Datenformular from './Formularseite_Components.js';
import '../Seitenuebergreifende_Elemente/layout.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";



class Formularseite extends React.Component {
  render() {
    return (
        <div className="Formularseite">
          <div class="grid-container_Formular">
                    <div class="Überschrift_Formular">
                      <h1>Formularübertragung</h1>
                    </div>
                    <div class="Button_Formular">
                      <NavLink to="/Warenkorbseite"><button class="button button_Überschrift">Abbrechen</button></NavLink>
                    </div>
                    <div class="Datenübersicht_Formular"><h2>Persönliche Daten</h2></div>

                    
                    <Datenformular/>
                    
                    <div class="Preise_Formular">
                        <div class="item"><h2>Preisübersicht</h2></div>
                        <div class="item">Preis1</div>
                        <div class="item">Preis2</div>
                        <div class="item">Preis3</div>
                        <div class="item">Gesamtpreis</div>
                        <div class="item">
                          <NavLink to="/Bestaetigungsseite"><button class="button_Standard">Jetzt kaufen</button></NavLink>
                        </div>
                    </div>

                </div>  
        </div>
      );
  }
}


export default Formularseite;