import React from 'react';
import './Warenkorbseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Warenkorbseite extends React.Component {
    render() {
        return (
            <div className="Warenkorbseite">
                 <div class="grid-container_Warenkorb">
                    <div class="Überschrift_Warenkorb">
                      <h1>Ihr Warenkorb</h1>
                    </div>
                    <div class="Button_Warenkorb">
                        <NavLink to="/"><button class="button button_Überschrift">Weiter shoppen</button></NavLink>
                    </div>
                    <div class="Produktübersicht_Warenkorb"><h2>Produktübersicht</h2></div>

                    <div class="Produkte_Warenkorb">
                      <div class="item Bild_Warenkorb">
                        <div class="item">Bild1</div>
                        <div class="item PB_Warenkorb">
                          <div class="item">Titel1</div>
                          <div class="item">Beschreibung1</div>
                          <div class="item Menge_Warenkorb">
                            <div class="item">Menge:</div>
                            <div class="item">Auswahl</div>
                            <div class="item"><button class="button_X">X</button></div>
                          </div>
                        </div>
                      </div>

                      <div class="item Bild_Warenkorb">
                        <div class="item">Bild2</div>
                        <div class="item PB_Warenkorb">
                          <div class="item">Titel2</div>
                          <div class="item">Beschreibung2</div>
                          <div class="item Menge_Warenkorb">
                          <div class="item">Menge:</div>
                            <div class="item">Auswahl</div>
                            <div class="item"><button class="button_X">X</button></div>
                          </div>
                        </div>
                      </div>

                      <div class="item Bild_Warenkorb">
                        <div class="item">Bild3</div>
                        <div class="item PB_Warenkorb">
                          <div class="item">Titel3</div>
                          <div class="item">Beschreibung3</div>
                          <div class="item Menge_Warenkorb">
                          <div class="item">Menge:</div>
                            <div class="item">Auswahl</div>
                            <div class="item"><button class="button_X">X</button></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="Preise_Warenkorb">
                        <div class="item"><h2>Preisübersicht</h2></div>
                        <div class="item">Preis1</div>
                        <div class="item">Preis2</div>
                        <div class="item">Preis3</div>
                        <div class="item">Gesamtpreis</div>
                        <div class="item">
                        <NavLink to="/Formularseite"><button class="button_Standard">Jetzt bezahlen</button></NavLink>
                        </div>
                    </div>

                </div>            
            </div>
          );
    }
}


export default Warenkorbseite;