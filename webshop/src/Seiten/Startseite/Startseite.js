import React from 'react';
import './Startseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';
import ProdukListe from './ProduktListe';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Startseite extends React.Component {
    render() {
      return (
          <div className="Startseite">
              <div class="grid-container_Start">
                    <div class="Überschrift_Start">
                      <h1>Willkommen zu Vinolandia</h1>
                    </div>

                    <div class="Button_Start">
                      <NavLink to="/Warenkorbseite"><button class="button button_Überschrift">Warenkorb ansehen</button></NavLink>
                    </div>
                    <div class="Beschreibung_Start">Der Name sagt eigentlich schon alles: Bei Vinolandia bekommt ihr eine große Auswahl geiler Weine. Ob für den Mädelsabend, ein Dinner mit Freunden, für Weinanfänger oder die Feinherben, in dem Onlineshop findet jeder den richtigen Tropfen. Ihr wisst nicht, welcher Wein am besten zu Wild oder Fisch passt? Bei Vinolandia findet ihr aufjedenfall was.</div>
  
                    <div class="Produkte_Start">
                      {ProdukListe.map(Produkt =>  (
                        <div class="item Bild_Start">
                        <div class="item"><img class="image_start" src={Produkt.Bild} alt={Produkt.Titel} /> </div>
                        <div class="item PB_Start">
                          <div class="item"><h2>{Produkt.Titel}</h2></div>
                          <div class="item">{Produkt.Beschreibung}</div>
                          <div><h4>Preis: {Produkt.Preis}</h4></div>
                          <div class="item Menge_Start">
                            <div class="item">Menge:</div>
                            <div class="item"><input type="number" min="1" max="100"/></div>
                            <div class="item">
                            <NavLink to="/Warenkorbseite"><button class="button_Standard">Zum Warenkorb hinzufügen</button></NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                        )}


                      {/* <div class="item Bild_Start">
                        <div class="item">Bild2</div>
                        <div class="item PB_Start">
                          <div class="item">Titel2</div>
                          <div class="item">Beschreibung2</div>
                          <div class="item Menge_Start">
                          <div class="item">Menge:</div>
                            <div class="item"><input type="number" min="1" max="100"/></div>
                            <div class="item">
                            <NavLink to="/Warenkorbseite"><button class="button_Standard">Zum Warenkorb hinzufügen</button></NavLink>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="item Bild_Start">
                        <div class="item">Bild3</div>
                        <div class="item PB_Start">
                          <div class="item">Titel3</div>
                          <div class="item">Beschreibung3</div>
                          <div class="item Menge_Start">
                          <div class="item">Menge:</div>
                            <div class="item"><input type="number" min="1" max="100"/></div>
                            <div class="item">
                            <NavLink to="/Warenkorbseite"><button class="button_Standard">Zum Warenkorb hinzufügen</button></NavLink>
                            </div>
                          </div>
                        </div>
                      </div>*/}
                    </div>
                </div> 
 
          </div>
        );
    }
  }
  
             {/* <h1>Startseite</h1>
              <p>Test</p>
              <p><NavLink to="/Warenkorbseite">Warenkorb ansehen</NavLink></p>
              <p><NavLink to="/Warenkorbseite">Zum Warenkorb hinzufügen</NavLink></p> */}

  export default Startseite;