import React from 'react';
import './Formularseite.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Formularseite extends React.Component {
  render() {
    return (
        <div className="Formularseite">
          <div class="grid-container_Formular">
                    <div class="Überschrift_Formular">Überschrift</div>
                    <div class="Button_Formular">
                      <NavLink to="/Warenkorbseite">Abbrechen</NavLink>
                    </div>
                    <div class="Datenübersicht_Formular">Persönliche Daten</div>

                    <div class="Daten_Formular">
                      <div class="item">Bezeichnung</div>
                      <div class="item">Button</div>
                      <div class="item">Bezeichnung</div>
                      <div class="item">Button</div>
                      <div class="item">Bezeichnung</div>
                      <div class="item">Button</div>
                      <div class="item">Bezeichnung</div>
                      <div class="item">Button</div>
                    </div>

                    <div class="Preise_Formular">
                        <div class="item">Preisübersicht</div>
                        <div class="item">Preis1</div>
                        <div class="item">Preis2</div>
                        <div class="item">Preis3</div>
                        <div class="item">Gesamtpreis</div>
                        <div class="item">
                          <NavLink to="/Bestaetigungsseite">Jetzt kaufen</NavLink>
                        </div>
                    </div>

                </div>  
        </div>
      );
  }
}


export default Formularseite;