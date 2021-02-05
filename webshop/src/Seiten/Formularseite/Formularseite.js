import React from 'react';
import './Formularseite.css';
import Datenformular from './Datenformular.js';
import '../Seitenuebergreifende_Elemente/layout.css';
import '../Seitenuebergreifende_Elemente/Überschrift';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import { render } from 'react-dom';
import Überschrift from '../Seitenuebergreifende_Elemente/Überschrift';
import Preise from './Preise_Formular'



// Definition der Formularseite im Allgemeinenen

class Formularseite extends React.Component {
  render() {
    // Unpacking der notwendigen Props
    const {WarenkorbEintraege, AllesLöschen} = this.props;
  
     // Definition der Elemente Überschrift und Button mithilfe der seitenübergreifenden Elementen
      // Definition des Datenformulars mithilfe der importierten Klasse "Datenformular", an welche die Elemente als Props weitergegeben werden
      // Preise werden durch die Klasse "Preise" generiert, an welche die Warenkorbeinträge übergeben werden
    return (
        <div className="Formularseite">
          <div class="grid-container_Formular">
                    <Überschrift Text="Formularübertragung"/>
                    <div class="Button_Formular">
                      <NavLink to="/Warenkorbseite"><button class="button button_Überschrift">Abbrechen</button></NavLink>
                    </div>
                    <div class="Datenübersicht_Formular"><h2>Persönliche Daten</h2></div>
                    <Datenformular Bezeichnungen={["Name","Text", "Vorname","Text", "Adresse","Text", "Telefonnummer","Text", 
                    "Zahlungsmittel", ["Dropdown","Bitte wählen", "Girokarte", "Kreditkarte", "Paypal", "Auf Rechnung", "Sofort-Überweisung"], 
                    "Karteninhaber", "Text", "IBAN", "Text", "BIC", "Text"]}/>
                    <div class = "Balken"/>
                    <Preise WarenkorbEintraege={WarenkorbEintraege} AllesLöschen={AllesLöschen}/>

                        
                </div>  
        </div>
      );
  }
}


export default Formularseite;