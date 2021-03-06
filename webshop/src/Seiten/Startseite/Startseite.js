import React from 'react';
import './Startseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';
import '../Seitenuebergreifende_Elemente/Überschrift';
import Produkte_Startseite from './Produkte_Startseite';
import ProduktListe from './ProduktListe';
import Überschrift from '../Seitenuebergreifende_Elemente/Überschrift';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Beschreibung from './Shop_Beschreibung';

// Definition der Startseite im Allgemeinen

class Startseite extends React.Component {
    render() {
      // Unpacking der notwendigen Props
      const {WarenkorbHinzufügen, countWarenkorbEintraege} = this.props;
      return (
      <div class="grid-container_Start">
        <Überschrift Text="Willkommen zu Vinolandia"/>
        <div class="Button_Start">
          <NavLink to="/Warenkorbseite"><button class="button button_Überschrift">Warenkorb ansehen ({countWarenkorbEintraege})</button></NavLink>
        </div>
        <div class="Beschreibung_Start">{Beschreibung}</div>
        <Produkte_Startseite ProduktListe={ProduktListe} WarenkorbHinzufügen={WarenkorbHinzufügen}/>
      </div> 
        );
    }
  }
  
  export default Startseite;