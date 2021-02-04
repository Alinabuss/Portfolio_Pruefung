import React from 'react';
import './Startseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';
import Produkt_Func from './Produkte'
import ProduktListe from './ProduktListe';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";



class Startseite extends React.Component {
    render() {
      const {WarenkorbHinzufügen, countCartItems} = this.props;
      return (
          <div className="Startseite">
              <div class="grid-container_Start">
                    <div class="Überschrift_Start">
                      <h1>Willkommen zu Vinolandia</h1>
                    </div>

                    <div class="Button_Start">
                      <NavLink to="/Warenkorbseite"><button class="button button_Überschrift">Warenkorb ansehen ({countCartItems})</button></NavLink>
                    </div>
                    <div class="Beschreibung_Start">Der Name sagt eigentlich schon alles: Bei Vinolandia bekommt ihr eine große Auswahl geiler Weine. Ob für den Mädelsabend, ein Dinner mit Freunden, für Weinanfänger oder die Feinherben, in dem Onlineshop findet jeder den richtigen Tropfen. Ihr wisst nicht, welcher Wein am besten zu Wild oder Fisch passt? Bei Vinolandia findet ihr aufjedenfall was.</div>
  
                    <div class="Produkte_Start">
                      {ProduktListe.map(Name =>  Produkt_Func(Name.id, Name, WarenkorbHinzufügen))}
                    </div>
                </div> 
 
          </div>
        );
    }
  }
  
  export default Startseite;